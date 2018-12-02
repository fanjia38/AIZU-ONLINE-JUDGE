// 1_C : Rectangle
process.stdin.setEncoding('utf8')

process.stdin.on('data', input => {
  const [a, b] = input.split(' ').map(data => parseInt(data, 10))
  process.stdout.write(`${a * b} ${(a + b) * 2}\n`)
  process.exit(0)
})
