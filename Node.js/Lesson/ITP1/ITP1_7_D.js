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

  // TODO: 行列の積を求める
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
