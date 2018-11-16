// 4_B : Circle
const input = require('fs').readFileSync('/dev/stdin', 'utf8')
const r = parseFloat(input)

const area = (r * r) * Math.PI
const length = (2 * r) * Math.PI

console.log(`${area} ${length}`)
