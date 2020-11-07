const fs = require('fs')
fs.readFile('./成绩.txt', 'utf8', (err, data) => {
  if (err) return console.log('读取失败')
  let oldArr = data.split(' ')
  let newArr = []
  oldArr.forEach((item) => {
    newArr.push(item.replace('=', '：'))
  })
  const chengji = newArr.join('\r\n')
  fs.writeFile('./成绩ok.txt', chengji, (err) => {
    if (err) return console.log('写入文件失败！' + err.message) // 如果文件写入失败，则报错
    console.log('文件写入成功！')
  })
})
