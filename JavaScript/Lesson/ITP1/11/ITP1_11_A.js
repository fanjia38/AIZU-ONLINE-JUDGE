/**
 * 11_A : Dice I
 * https://onlinejudge.u-aizu.ac.jp/courses/lesson/2/ITP1/11/ITP1_11_A
 */
/**
 * ダイスを転がした後の面の状態を取得する
 * @param {Array} list ダイスの面
 * @param {String} dice 転がる方角
 */
function rolled (list, dice) {
  const base = {
    N: [2, 6, 3, 4, 1, 5],
    E: [4, 2, 1, 6, 5, 3],
    S: [5, 1, 3, 4, 6, 2],
    W: [3, 2, 6, 1, 5, 4]
  }

  return base[dice].map(val => list[val - 1])
}

function call (input) {
  const dataList = input.split(/\n/)
  const dices = dataList[0].split(' ')

  const rolls = [...dataList[1]]
  const tmp = rolls.reduce((prev, current) => {
    return rolled(prev, current)
  }, dices)
  console.log(tmp[0])
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
