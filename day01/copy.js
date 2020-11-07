const fs = require('fs')
const path = require('path')
const pa = path.join(__dirname, './成绩ok2.txt')
fs.readFile('./成绩.txt', 'utf8', (err, data) => {
  if (err) return console.log('读取失败')
  const chengji = data.replace(/=/g, ':').replace(/ /g, '\r\n')
  // var reg = /(\w*)=(.*) (.*)/g
  // const chengji = data.replace(/(\w*)=(.*) (.*)/g, '$1:$2\r\n$3')
  // console.log(chengji)

  fs.writeFile(path.join(__dirname, './成绩ok2.txt'), chengji, (err) => {
    if (err) return console.log('写入文件失败！' + err.message) // 如果文件写入失败，则报错
    console.log('文件写入成功！')
    // console.log(path.basename(pa))
  })
})
console.log(pa)
console.log(path.basename(pa))
// D:\work\node\day01\成绩ok1.txt
