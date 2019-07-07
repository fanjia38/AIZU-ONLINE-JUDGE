// 6_C : Official House

// 入退室記録管理用のテーブルの初期化
function initHouse (buildingNum, floorNum, roomNum) {
  const houses = []
  for (let builingCount = 0; builingCount < buildingNum; builingCount++) {
    houses[builingCount] = []
    for (let floorCount = 0; floorCount < floorNum; floorCount++) {
      houses[builingCount][floorCount] = Array(roomNum).fill(0)
    }
  }
  return houses
}

// 入居情報の出力
function outputHouse (houses) {
  houses.forEach((building, buidlingIndex) => {
    if (buidlingIndex !== 0) {
      console.log('####################')
    }

    building.forEach(floor => {
      console.log(` ${floor.join(' ')}`)
    })
  })
}

function call (input) {
  const inputList = input.split('\n')

  const num = parseInt(inputList[0], 10) // 情報の件数
  inputList.shift() // inputList を入退室記録のみの配列にする

  // 公舎情報
  const houses = initHouse(4, 3, 10)

  for (let index = 0; index < num; index++) {
    const [b, f, r, v] = inputList[index].split(' ').map(value => parseInt(value, 10))
    houses[b - 1][f - 1][r - 1] += v
  }
  outputHouse(houses)
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
