// 6_D : Matrix Vector Multiplication
function call (input) {
  const inputList = input.split('\n')
  const [n, m] = inputList.shift().split(' ').map(value => parseInt(value, 10))

  // 行列AとベクトルBの配列を取得する
  const listA = inputList.splice(0, n)
  const listB = inputList.splice(0, m).map(value => parseInt(value, 10))

  // 行列とベクトルの積を求める
  const answer = listA.map(rows => {
    const data = rows.split(' ').map(value => parseInt(value, 10))
    return data.reduce((prev, current, index) => {
      return prev + (current * listB[index])
    }, 0)
  })

  console.log(answer.join('\n'))
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
