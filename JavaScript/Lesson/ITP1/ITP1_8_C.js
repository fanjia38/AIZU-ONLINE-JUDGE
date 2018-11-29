// 8_C : Counting Characters
const A_CHAR_CODE = 'a'.charCodeAt(0)
const Z_CHAR_CODE = 'z'.charCodeAt(0)

function call (input) {
  const array = input.trim().split('')

  // 文字のカウント
  let charList = []
  array.forEach(char => {
    char = char.toLowerCase()
    const code = char.charCodeAt(0) - A_CHAR_CODE
    if (code >= 0) {
      charList[code] = typeof charList[code] !== 'undefined' ? charList[code] + 1 : 1
    }
  })

  // 結果出力
  for (let index = 0; index <= Z_CHAR_CODE - A_CHAR_CODE; index++) {
    console.log(`${String.fromCodePoint(A_CHAR_CODE + index)} : ${charList[index] | 0}`)
  }
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
