// 9_A : Finding a Word
function call (input) {
  const pos = input.indexOf('\n')
  const word = input.substr(0, pos)
  const text = input.substring(pos + 1, input.length)

  const regex = new RegExp(`^${word}$`, 'i')
  let count = 0
  text.split(/[\s\n]/).forEach(str => {
    if (str === 'END_OF_TEXT') {
      console.log(count)
      process.exit(0)
    }

    if (regex.test(str)) {
      count++
    }
  })
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
