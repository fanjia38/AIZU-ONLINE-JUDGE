// 3_C : Swapping Two Numbers
const input = require('fs').readFileSync('/dev/stdin', 'utf8')

input.split('\n').forEach(data => {
  if (data === '0 0') {
    process.exit(0)
  }

  const unsortedArray = data.split(' ').map(value => parseInt(value, 10))
  const sortedArray = unsortedArray.sort((a, b) => a - b)

  process.stdout.write(`${sortedArray.join(' ')}\n`)
})
