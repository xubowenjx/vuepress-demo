var fs = require('fs')
module.exports = function(filePath, text) {
  fs.writeFile(filePath, text, { flag: 'a' }, function(err) {
    console.log(filePath)
    if (err) {
      console.log(err)
    }
  })
}
