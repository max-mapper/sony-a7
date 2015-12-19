var tcp = require('./tcp.js')
var requests = require('./requests.js')
var he = require('he')
var xmljson = require('xml-json')
var pump = require('pump')
var concat = require('concat-stream')
var parallel = require('run-parallel')

module.exports = function (cb) {
  tcp("10.0.0.1", 64321, requests.browse('PhotoRoot'), function (err, resp) {
    if (err) throw err
    var id = resp.toString().split('id=&quot;')[1].split('&quot;')[0]
    if (!id) throw new Error('no id')
    tcp("10.0.0.1", 64321, requests.browse(id), function (err, resp) {
      if (err) throw err
      var id = resp.toString().split('id=&quot;')[1].split('&quot;')[0]
      if (!id) throw new Error('no id')
      parseResults(resp, 'container', function (err, containers) {
        if (err) throw err
        var fns = containers.map(function (container) {
          return function (cb) {
            tcp("10.0.0.1", 64321, requests.browse(container.id), function (err, resp) {
              if (err) throw err
              parseResults(resp, 'item', function (err, results) {
                if (err) return cb(err)
                cb(null, results)
              })
            })
          }
        })
        parallel(fns, function (err, results) {
          if (err) return cb(err)
          var all = []
          results.forEach(function (r) {
            all = all.concat(r)
          })
          cb(null, all)
        })
      })
    })
  })
}

function parseResults (resp, key, cb) {
  var result = he.decode(resp.toString().split('<Result>')[1].split('</Result>')[0])
  var parser = xmljson(key)
  pump(parser, concat(function (results) {
    cb(null, results)
  }), function (err) {
    if (err) cb(err)
  })
  parser.end(result)
}
