// 4_D : Min, Max and Sum
const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const [num, data] = input.split('\n')
const dataList = data.split(' ').map(value => parseInt(value, 10)).splice(0, num)

const min = Math.min(...dataList)
const max = Math.max(...dataList)
const sum = dataList.reduce((prev, current) => prev + current)

console.log(`${min} ${max} ${sum}`)
