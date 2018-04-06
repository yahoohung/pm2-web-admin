const SECRET = 'WHATEVERYOUWANT'
const USERS = { 'admin': '12345678' }

const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io').listen(server, { 
  path: '/foo/bar',
  pingInterval: 10000,
  pingTimeout: 5000,  
});
const next = require('next')
const basicAuth = require('express-basic-auth')
const jwt = require('jsonwebtoken')
const jwtAuth = require('socketio-jwt-auth')

const port = parseInt(process.env.PORT, 10) || 9000;
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()
const authMiddleware = basicAuth({
  users: USERS,
  challenge: true,
  realm: 'Imb4T3st4pp',
});

const CronJob = require('cron').CronJob
const api = require('./api')
const pm2Wrapper = new api()

// Settings
const timeZone = 'Asia/Hong_Kong'

const job = new CronJob('*/5 * * * * *', async () => {
  // cronjob
  // TODO:

  try {

    const list = await pm2Wrapper.list()
    io.emit('pm2', list);

  } catch (err) {
    // TODO:
    console.log(err)
  }

}, () => {
  /* This function is executed when the job stops */

},
  false, /* Start the job right now */
  timeZone /* Time zone of this job. */
);

// using middleware
io.use(jwtAuth.authenticate({
  secret: SECRET,    // required, used to verify the token's signature
  algorithm: 'HS256'        // optional, default to be HS256
}, function (payload, done) {
  console.log(payload.sub)
  // done is a callback, you can use it as follows
  if (Object.keys(USERS).indexOf(payload.sub)) {
    done(null, { user: payload.sub })
  } else {
    done(null, false, 'user does not exist');
  }
}));

io.on('pm2 start', (data) => {
  console.log(1, data);
});

io.on('connection', function (socket) {
  console.log('Authentication passed!');
  // now you can access user info through socket.request.user
});



nextApp.prepare()
  .then(() => {

    job.start(); 

    app.get('/', authMiddleware, (req, res) => {

      req.auth = {
        ...req.auth,
        token: jwt.sign({ userId: req.auth.user }, SECRET)
      }

      return nextApp.render(req, res, '/', req.query)
    })

    app.get('*', (req, res) => {
      return nextHandler(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })