// 2_D : Circle in a Rectangle
process.stdin.setEncoding('utf8')

// W, H が正数になるよう変換する
var convertPositiveNumber = function (W, H, x, y) {
  if (W < 0) {
    x += W = -W
  }
  if (H < 0) {
    y += H = -H
  }

  return [W, H, x, y]
}

process.stdin.on('data', input => {
  let [W, H, x, y, r] = input.split(' ').map(value => parseInt(value, 10))
  let answer = true

  if (W < 0 || H < 0) {
    [W, H, x, y] = convertPositiveNumber(W, H, x, y)
  }

  if (x - r < 0 || x + r > W) {
    answer = false
  } else if (y - r < 0 || y + r > H) {
    answer = false
  }

  process.stdout.write(`${answer ? 'Yes' : 'No'}\n`)
  process.exit(0)
})
