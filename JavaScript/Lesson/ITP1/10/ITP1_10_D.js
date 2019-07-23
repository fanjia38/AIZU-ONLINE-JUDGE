/**
 * 10_D : Distance II
 * https://onlinejudge.u-aizu.ac.jp/courses/lesson/2/ITP1/10_D
 */
function calc (dataMap, p) {
  const manh = dataMap.reduce((prev, current) => {
    return prev + Math.pow(Math.abs(current.x - current.y), p)
  }, 0)
  return Math.pow(manh, 1 / p)
}

function call (input) {
  const dataList = input.split(/\n/)
  const n = parseInt(dataList[0])
  const x = dataList[1].split(' ', n)
  const y = dataList[2].split(' ', n)

  const dataMap = x.map((val, index) => {
    return { x: parseInt(val), y: parseInt(y[index]) }
  })

  console.log(calc(dataMap, 1))
  console.log(calc(dataMap, 2))
  console.log(calc(dataMap, 3))
  console.log(Math.max(...dataMap.map(val => calc([val], 1))))
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
