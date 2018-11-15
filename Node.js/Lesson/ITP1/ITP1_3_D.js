// 3_D : How Many Divisors?
const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const [a, b, c] = input.split(' ').map(value => parseInt(value, 10))
let count = 0

for (let index = a; index <= b; index++) {
  if (c % index === 0) {
    count++
  }
}

console.log(count)
