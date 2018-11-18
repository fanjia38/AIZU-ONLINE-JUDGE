// 5_C : Print a Chessboard
const input = require('fs').readFileSync('/dev/stdin', 'utf8')
const oddPattern = '#.'
const evenPattern = '.#'

input.split('\n').forEach(data => {
  const [H, W] = data.split(' ').map(value => parseInt(value, 10))
  if (H === 0 && W === 0) {
    process.exit(0)
  }

  for (let countH = 1; countH <= H; countH++) {
    const pattern = (countH % 2) === 1 ? oddPattern : evenPattern
    console.log(pattern.repeat(W).slice(0, W))
  }
  console.log('')
})
