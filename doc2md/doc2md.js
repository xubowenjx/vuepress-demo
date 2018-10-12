var mammoth = require('mammoth')
var wf = require('./writeFile')
var TurndownService = require('turndown')
var fs = require('fs')

var turndownService = new TurndownService()
function convert(path, output) {
  console.log(path, output)
  mammoth
    .convertToHtml({ path })
    .then(function(result) {
      var markdown = turndownService.turndown(result.value) // The generated HTML
      wf(output, markdown)
      //var messages = result.messages // Any messages, such as warnings during conversion
    })
    .done()
}

function readdir(path) {
  var fileList = []

  function readDirSync(path) {
    var pa = fs.readdirSync(path)
    pa.forEach(function(ele, index) {
      var info = fs.statSync(path + '/' + ele)
      if (info.isDirectory()) {
        readDirSync(path + '/' + ele)
      } else {
        //过滤文件类型
        ele.endsWith('docx') && fileList.push(path + '/' + ele)
      }
    })
  }
  readDirSync(path)
  return fileList
}
function convertAll(dir) {
  let fileList = readdir(dir)
  fileList.forEach(file => {
    //将docx的名字中的空格替换成-
    let output = file.replace(/\s+/g, '-').replace(/doc[x]?\b/, 'md')
    convert(file, output)
  })
}
module.exports = {
  convert,
  convertAll
}
