// 2_A : Small, Large, or Equal
process.stdin.setEncoding('utf8')

process.stdin.on('data', input => {
  const [a, b] = input.split(' ').map(value => parseInt(value, 10))
  const flag = a < b ? '<' : (a > b ? '>' : '==')
  process.stdout.write(`a ${flag} b\n`)
  process.exit(0)
})
