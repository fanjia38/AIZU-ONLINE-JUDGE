function sum(numArray) {
  return numArray.reduce((prev, current) => prev + current, 0)
}

function call (input) {
  const dataset = input.split('\n')

  // 最初の行の入力と、それ以外を分ける
  const first = dataset.shift()
  const datalist = dataset

  const [r, c] = first.split(' ').map(value => parseInt(value, 10))

  const sumlist = new Array(c + 1)
  for (let rowIndex = 0; rowIndex < r; rowIndex++) {
    const string = datalist[rowIndex]
    const data = string.split(' ').map(value => parseInt(value, 10)).splice(0, c)
    data.push(sum(data))
    console.log(data.join(' '))

    for (let count = 0; count < c + 1; count++) {
      sumlist[count] = typeof sumlist[count] !== 'undefined' ? sumlist[count] + data[count] : data[count]
    }
  }
  console.log(sumlist.join(' '))
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
