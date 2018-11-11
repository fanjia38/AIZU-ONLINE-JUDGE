// 2_B : Range
process.stdin.setEncoding('utf8')

process.stdin.on('data', input => {
  const [a, b, c] = input.split(' ').map(value => parseInt(value, 10))
  process.stdout.write(`${a < b && b < c ? 'Yes' : 'No'}\n`)
  process.exit(0)
})
