// 7_D : Matrix Multiplication
function call (input) {
  const dataset = input.split('\n')

  const first = dataset.shift()
  const datalist = dataset

  const [n, m, l] = first.split(' ').map(value => parseInt(value, 10))

  // 行列A
  let listA = []
  for (let index = 0; index < n; index++) {
    const row = datalist[index]
    listA.push(row.split(' ').map(value => parseInt(value, 10)).splice(0, m))
  }

  // 行列B
  let listB = []
  for (let index = n; index < n + m; index++) {
    const row = datalist[index]
    listB.push(row.split(' ').map(value => parseInt(value, 10)).splice(0, l))
  }

  // 行列の積を求める
  listA.forEach(rowA => {
    let producted = []
    for (let indexB = 0; indexB < l; indexB++) {
      const value = rowA.reduce((prev, current, index) => {
        return prev + (current * listB[index][indexB])
      }, 0)
      producted.push(value)
    }
    console.log(producted.join(' '))
  })
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
