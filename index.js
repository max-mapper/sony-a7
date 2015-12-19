var browse = require('./browse')
var nugget = require('nugget')

browse(function (err, meta) {
  if (err) throw err
  var downloads = []

  meta.forEach(function (item) {
    console.log(item.res)
    // item.res.forEach(function (res) {
    //   if (downloads.length > 20) return
    //   downloads.push(res._)
    // })
  })
  
  nugget(downloads, {dir: './photos', verbose: true, sockets: 5}, function (err) {
    if (err) throw err
  })
})