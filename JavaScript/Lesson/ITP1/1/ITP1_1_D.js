// 1_D : Watch
process.stdin.setEncoding('utf8')

process.stdin.on('data', input => {
  const times = [input, input, input].map((value, index) => Math.floor(parseInt(value, 10) / Math.pow(60, index)) % 60)
  process.stdout.write(`${times.reverse().join(':')}\n`)
  process.exit(0)
})
