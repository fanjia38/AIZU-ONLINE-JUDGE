// 5_D : Structured Programming
function call (n) {
  for (let i = 1, x = 1; i <= n; i++, x = i) {
    if (x % 3 === 0) {
      process.stdout.write(` ${i}`)
    } else {
      for (; x; x /= 10) {
        if (Math.floor(x % 10) === 3) {
          process.stdout.write(` ${i}`)
          x = false
        }
      }
    }
  }
  process.stdout.write('\n')
}

// input
const input = require('fs').readFileSync('/dev/stdin', 'utf8')
call(parseInt(input))
