// 3_B : Print Test Cases
const input = require('fs').readFileSync('/dev/stdin', 'utf8')
let index = 1

input.split('\n').forEach(value => {
  if (value === '0') {
    process.exit(0)
  }
  process.stdout.write(`Case ${index++}: ${value}\n`)
})
