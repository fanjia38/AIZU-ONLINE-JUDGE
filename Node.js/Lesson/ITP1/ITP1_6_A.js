// 6_A : Reversing Numbers
function call (input) {
  const [first, second] = input.split('\n')
  const numList = second.split(' ').map(value => parseInt(value, 10)).splice(0, parseInt(first, 10))

  process.stdout.write(`${numList.reverse().join(' ')}\n`)
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
