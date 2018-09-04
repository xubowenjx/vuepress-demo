var fs = require('fs')
var path = require('path')
var langs = require('./locale')
var langTypeList = Object.keys(langs)
var defaultLang = require('./default-language')

var root = path.join(__dirname, '../../')
var fileMapper = {}

function readDirSync(path, exclude) {
  var pa = fs.readdirSync(path)
  pa.forEach(function(ele, index) {
    if (exclude.includes(ele)) {
      return
    }
    var info = fs.statSync(path + '/' + ele)
    if (info.isDirectory()) {
      logPath('dir', path + '/' + ele)
      readDirSync(path + '/' + ele, exclude)
    } else {
      logPath('file', path + '/' + ele)
    }
  })
}

function logPath(type, _path) {
  let _path_ = _path
    .replace(root, '')
    .replace('.md', '')
    .replace('README', '')
  if (type === 'dir') {
    _path_ += '/'
  }

  let b = belongTo(_path_)

  if (b in fileMapper) {
    if (type === 'dir' && _path_ !== `/${b}/`) {
      let dir = fileMapper[b].dirs
      dir.push(_path_)
    }
    if (type === 'file' && !_path_.endsWith('/')) {
      let dir = fileMapper[b].files
      dir.push(_path_)
    }
  } else {
    fileMapper[b] = {
      dirs: [],
      files: []
    }
    if (type === 'dir' && _path_ !== `/${b}/`) {
      let dir = fileMapper[b].dirs
      dir.push(_path_)
    }
    if (type === 'file' && !_path_.endsWith('/')) {
      let dir = fileMapper[b].files
      dir.push(_path_)
    }
  }
}
function belongTo(path) {
  for (let l of langTypeList) {
    if (path.indexOf(l) === 1) {
      return l
    }
  }
  return '/'
}

function main() {
  readDirSync(root, ['.vuepress'])
  var ret = {}
  for (let k in fileMapper) {
    var result = generateConfig(k, fileMapper[k])
    if (k.indexOf('/') == -1) {
      k = `/${k}/`
    }
    ret[k] = result
  }
  return ret
}

function generateConfig(lp, config) {
  let lang = ''
  if (lp === '/') {
    lang = defaultLang
  } else {
    lang = lp
  }
  var sidebar = {}
  config.dirs.forEach(el => {
    let child = config.files.filter(c => {
      return c.indexOf(el) > -1
    })
    child = child.map(c => {
      return c.replace(el, '')
    })
    if (child.length > 0) {
      child.unshift('')
      sidebar[el] = child
    }
  })
  let sources = langs[lang]
  var ret = {
    selectText: sources.language,
    label: sources.lang,
    nav: config.dirs.map(el => {
      let child = config.files.filter(c => {
        return c.indexOf(el) > -1
      })
      let lk = el.replace(lang, '').replace(/\//g, '')
      return {
        text: sources[lk] || lk,
        link: el,
        items: child.map(ch => {
          let ck = ch.replace(el, '')
          return {
            text: sources[ck] || ck,
            link: ch
          }
        })
      }
    }),
    sidebar: sidebar
  }
  return ret
}

module.exports = main()
