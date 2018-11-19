// 5_A : Print a Rectangle
const input = require('fs').readFileSync('/dev/stdin', 'utf8')

input.split('\n').forEach(data => {
  const [H, W] = data.split(' ').map(value => parseInt(value, 10))
  if (H === 0 && W === 0) {
    process.exit(0)
  }

  const line = `${'#'.repeat(W)}\n`
  console.log(`${line.repeat(H)}`)
})
