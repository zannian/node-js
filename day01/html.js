const fs = require('fs')
const path = require('path')
const regSty = /<style>[\s\S]*<\/style>/
const regSrc = /<script>[\s\S]*<\/script>/
// 读取html文件
fs.readFile(path.join(__dirname, './index.html'), 'utf-8', function (
  err,
  data
) {
  if (err) return console.log('读取文件失败：' + err.message)
  // console.log('读取文件成功，内容是' + data)
  resolveCSS(data)
  resolveJS(data)
  resolveHTML(data)
})
function resolveCSS(htmlStr) {
  const sty1 = regSty.exec(htmlStr)
  //   console.log(sty1[0])
  let newSty = sty1[0].replace(/<style>/, '').replace(/<\/style>/, '')
  console.log(newSty)
  fs.writeFile(path.join(__dirname, './index.css'), newSty, (err) => {
    if (err) return console.log('写入文件失败！' + err.message) // 如果文件写入失败，则报错
    console.log('文件写入成功！')
  })
}
function resolveJS(htmlStr) {
  const js1 = regSrc.exec(htmlStr)
  //   console.log(sty1[0])
  let newJs = js1[0].replace(/<script>/, '').replace(/<\/script>/, '')
  //   console.log(newSty)

  fs.writeFile(path.join(__dirname, './js/index.js'), newJs, (err) => {
    if (err) return console.log('写入文件失败！' + err.message) // 如果文件写入失败，则报错
    console.log('文件写入成功！')
  })
  fs.mkdir(path.join(__dirname, './js'), { recursive: true }, (err) => {
    if (err) throw err
  })
}
function resolveHTML(htmlStr) {
  //   const js1 = regSrc.exec(htmlStr)
  //   console.log(sty1[0])
  let newHtml = htmlStr
    .replace(regSty, ' <link rel="stylesheet" href="./index.css" />')
    .replace(regSrc, '<script src="./js/index.js"></script>')
  //   console.log(newSty)
  fs.writeFile(path.join(__dirname, './index1.html'), newHtml, (err) => {
    if (err) return console.log('写入文件失败！' + err.message) // 如果文件写入失败，则报错
    console.log('文件写入成功！')
  })
}
