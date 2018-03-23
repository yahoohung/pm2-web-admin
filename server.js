const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io').listen(server, { path: '/foo/bar' });
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

const CronJob = require('cron').CronJob;
const api = require('./api');
const pm2Wrapper = new api();

// Settings
const timeZone = 'Asia/Hong_Kong';

const job = new CronJob('*/5 * * * * *', async () => {
  // cronjob
  // TODO:

  try{

    const list = await pm2Wrapper.list()
    io.emit('pm2', list);    


  }catch(err){
    // TODO:
    console.log(err)
  }

}, () => {
  /* This function is executed when the job stops */

},
  true, /* Start the job right now */
  timeZone /* Time zone of this job. */
);



io.on('connection', function (socket) {
  console.log('connected')

});

     

nextApp.prepare()
.then(() => {

  app.get('/', (req, res) => {
    return nextApp.render(req, res, '/', req.query)
  })

  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

