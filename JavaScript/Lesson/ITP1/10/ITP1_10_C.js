/**
 * 10_C: Standard Deviation
 * https://onlinejudge.u-aizu.ac.jp/courses/lesson/2/ITP1/10/ITP1_10_C
 */
function call (input) {
  const dataList = input.split(/\n/)
  let n = 0

  dataList.forEach((value, index) => {
    if (index % 2 === 0) {
      n = parseInt(value)
    } else if (n !== 0) {
      const items = value.split(' ', n).map(val => parseInt(val))
      const sum = items.reduce((a, b) => a + b)
      const m = sum / n

      const a2 = items.reduce((a, b) => Math.pow(b - m, 2) / n + a, 0)
      console.log(Math.pow(a2, 0.5))
    }
  })
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
