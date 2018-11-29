// 1_B : X Cubic
process.stdin.setEncoding('utf8')

process.stdin.on('data', input => {
  const answer = Math.pow(parseInt(input, 10), 3)
  process.stdout.write(`${answer}\n`)
  process.exit(0)
})
