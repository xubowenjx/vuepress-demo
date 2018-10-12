/**
 * @author xubowen
 * @description 写文件操作
 */
var fs = require('fs')
module.exports = function(filePath, text) {
  fs.writeFile(filePath, text, { flag: 'a' }, function(err) {
    if (err) {
      console.log(err)
    }
  })
}
