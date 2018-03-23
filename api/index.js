const pm2 = require('pm2');

class pm2Wrapper {

  async list () {
    return new Promise((resolve, reject) => {
      pm2.list((err, processDescriptionList) => {
        if(err) reject(err)

        resolve(processDescriptionList)
      })      
    })
  }  

  async describe (proc) {
    console.log(proc)
    return new Promise((resolve, reject) => {
      pm2.describe(proc, (err, thisProcess) => {
        if(err) reject(err)

        resolve(thisProcess)
      })      
    })
  }

  async restart (proc) {
    return new Promise((resolve, reject) => {
      pm2.restart(proc, (err, thisProcess) => {
        if(err) reject(err)

        resolve(thisProcess)
      })      
    })
  }
}

module.exports = pm2Wrapper;

