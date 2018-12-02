// 9_C : Card Game
function call (input) {
  const dataset = input.split('\n')

  const count = parseInt(dataset.shift(), 10)
  const list = dataset.splice(0, count)

  let [taroPoint, hanakoPoint] = [0, 0]
  list.forEach(row => {
    const [taro, hanako] = row.split(' ')
    const compare = taro.localeCompare(hanako)

    if (compare > 0) {
      taroPoint += 3
    } else if (compare < 0) {
      hanakoPoint += 3
    } else {
      taroPoint++
      hanakoPoint++
    }
  })

  console.log(`${taroPoint} ${hanakoPoint}`)
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
