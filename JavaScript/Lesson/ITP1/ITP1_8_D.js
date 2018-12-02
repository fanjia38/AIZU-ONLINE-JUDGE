// 8_D : Ring
function call (input) {
  const [s, p] = input.split('\n')

  const regex = new RegExp(p)
  console.log(regex.test(s + s) ? 'Yes' : 'No')
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
