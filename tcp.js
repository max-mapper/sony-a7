var net = require('net')
var concat = require('concat-stream')
var pump = require('pump')

module.exports = tcp

function tcp (host, port, body, cb) {
  var socket = net.connect({host: host, port: port, allowHalfOpen: true}, function connected () {
    socket.end(body)
  })

  var concatter = concat(function (resp) {
    cb(null, resp)
  })

  pump(socket, concatter, function (err) {
    if (err) cb(err)
  })
}
