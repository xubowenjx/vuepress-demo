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
var fileList = []

function readDirSync(path) {
  var pa = fs.readdirSync(path)
  pa.forEach(function(ele, index) {
    var info = fs.statSync(path + '/' + ele)
    if (info.isDirectory()) {
      readDirSync(path + '/' + ele)
    } else {
      fileList.push(path + '/' + ele)
    }
  })
}
function convertAll(dir) {
  readDirSync(dir)
  fileList.forEach(file => {
    let output = file.replace(/\s+/g, '-').replace(/doc[x]?\b/, 'md')
    convert(file, output)
  })
}
module.exports = {
  convert,
  convertAll
}
