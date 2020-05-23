const EventEmitter = require('events')

class Logger extends EventEmitter {
  log (mesg) {
    this.emit('message', `${mesg}`)
  }
}

const logger = new Logger()

logger.on('message', data => {
  console.log(data)
})

logger.log('HELLO EPTA')