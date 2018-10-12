var fs = require('fs')
module.exports = function(filePath, text) {
  fs.writeFile(filePath, text, { flag: 'a' }, function(err) {
     if (err) {
      console.log(err)
    }
  })
}
