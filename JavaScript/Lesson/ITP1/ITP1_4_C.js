// 4_C : Simple Calculator
const input = require('fs').readFileSync('/dev/stdin', 'utf8')

input.split('\n').forEach(data => {
  const ob = data.split(' ')[1]

  if (ob === '?') {
    process.exit(0)
  }

  console.log(Math.floor(eval(data)))
})
