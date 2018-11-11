// 2_C : Sorting Three Numbers
process.stdin.setEncoding('utf8')

process.stdin.on('data', input => {
  const number = input.split(' ').map(value => parseInt(value, 10))
  process.stdout.write(`${number.sort().join(' ')}\n`)
  process.exit(0)
})
