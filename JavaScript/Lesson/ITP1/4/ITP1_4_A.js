// 4_A : A / B Problem
const util = require('util')
const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const [a, b] = input.split(' ').map(value => parseInt(value, 10))
const d = a < b ? 0 : a / b
const r = a % b
const f = a / b

process.stdout.write(util.format('%s %s %s\n', Math.trunc(d), Math.trunc(r), f.toFixed(8)))
