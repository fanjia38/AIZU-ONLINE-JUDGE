/**
 * 10_A : Distance
 * https://onlinejudge.u-aizu.ac.jp/courses/lesson/2/ITP1/10/ITP1_10_A
 */
function call (input) {
  const [x1, y1, x2, y2] = input.replace(/\n/, '').split(' ')
  const a = (x2 - x1)
  const b = (y2 - y1)

  console.log(Math.sqrt((a*a) + (b*b)))
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
