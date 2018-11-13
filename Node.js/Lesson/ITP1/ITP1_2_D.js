// 2_D : Circle in a Rectangle
process.stdin.setEncoding('utf8')

process.stdin.on('data', input => {
  let [W, H, x, y, r] = input.split(' ').map(value => parseInt(value, 10))
  let answer = true

  if (x - r < 0 || x + r > W) {
    answer = false
  } else if (y - r < 0 || y + r > H) {
    answer = false
  }

  process.stdout.write(`${answer ? 'Yes' : 'No'}\n`)
  process.exit(0)
})
