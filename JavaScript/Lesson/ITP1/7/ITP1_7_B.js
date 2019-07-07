// 7_B : How many ways?
function call (input) {
  const dataset = input.split('\n')
  dataset.forEach(string => {
    if (string === '0 0') {
      process.exit(0)
    }

    const [n, x] = string.split(' ').map(value => parseInt(value, 10))
    let count = 0
    for (let first = 1; first <= n; first++) {
      for (let second = first + 1; second <= n; second++) {
        for (let third = second + 1; third <= n; third++) {
          if (first + second + third === x) {
            count++
          }
        }
      }
    }
    console.log(count)
  })
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
