/**
 * 10_B : Triangle
 * https://onlinejudge.u-aizu.ac.jp/courses/lesson/2/ITP1/10/ITP1_10_B
 */

function call (input) {
  const [a, b, C] = input.replace(/\n/, '').split(' ').map(value => parseInt(value))

  const radC = C * Math.PI / 180
  const S = a * b * (Math.sin(radC) / 2)
  console.log(S.toFixed(8))

  const L = a + b + Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(radC))
  console.log(L.toFixed(8))

  const h = b * Math.sin(radC)
  console.log(h.toFixed(8))
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
