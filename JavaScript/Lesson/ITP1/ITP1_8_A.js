// 8_A : Toggling Cases
function call (input) {
  const array = input.trim().split('')
  const changedArray = array.map(char => char.match(/[a-z]/) ? char.toUpperCase() : char.toLowerCase())
  console.log(changedArray.join(''))
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
