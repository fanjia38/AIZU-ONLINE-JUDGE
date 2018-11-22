// 7_A : Grading
function call (input) {
  const list = input.split('\n')

  list.forEach(string => {
    if (string === '-1 -1 -1') {
      process.exit(0)
    }

    const [m, f, r] = string.split(' ').map(value => parseInt(value, 10))
    let seiseki = ''
    const sumPoints = m + f

    // 中間試験、期末試験のいずれかを欠席した場合成績は F
    if (m < 0 || f < 0) {
      seiseki = 'F'
    } else {
      if (sumPoints >= 80) {
        seiseki = 'A'
      } else if (sumPoints >= 65) {
        seiseki = 'B'
      } else if (sumPoints >= 50) {
        seiseki = 'C'
      } else if (sumPoints >= 30) {
        if (r >= 50) {
          seiseki = 'C'
        } else {
          seiseki = 'D'
        }
      } else {
        seiseki = 'F'
      }
    }
    console.log(seiseki)
  })
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
