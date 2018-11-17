// 5_B : Print a Frame
const input = require('fs').readFileSync('/dev/stdin', 'utf8')

input.split('\n').forEach(data => {
  const [H, W] = data.split(' ').map(value => parseInt(value, 10))
  if (H === 0 && W === 0) {
    process.exit(0)
  }

  for (let countH = 1; countH <= H; countH++) {
    let line
    if (countH > 1 && countH < H) {
      line = `${'.'.repeat(W)}`
      line = line.replace(/(^\.|\.$)/gi, '#')
    } else {
      line = `${'#'.repeat(W)}`
    }
    console.log(`${line}`)
  }
  console.log('')
})
