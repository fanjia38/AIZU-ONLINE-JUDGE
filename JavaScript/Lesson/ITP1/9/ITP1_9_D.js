// 9_D : Transformation
function call (input) {
  const dataset = input.split('\n')

  let strList = dataset.shift().split('')
  const q = parseInt(dataset.shift(), 10)
  const list = dataset.splice(0, q)

  list.forEach(row => {
    let [order, a, b, p] = row.split(' ')
    a = parseInt(a, 10)
    b = parseInt(b, 10)

    switch (order) {
      case 'print':
        console.log(strList.slice(a, b + 1).join(''))
        break
      case 'reverse':
        const target = strList.splice(a, b - a + 1).reverse()
        strList.splice(a, 0, ...target)
        break
      case 'replace':
        const replaceWord = p.split('')
        strList.splice(a, b - a + 1, ...replaceWord)
        break
    }
  })
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
