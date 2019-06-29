// 8_B : Sum of Numbers
function call (input) {
  const dataset = input.split('\n')

  dataset.forEach(string => {
    if (string === '0') process.exit(0)

    const list = string.split('').map(value => parseInt(value, 10))
    const sum = list.reduce((prev, current) => prev + current)
    console.log(sum)
  })
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
