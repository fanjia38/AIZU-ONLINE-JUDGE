// 9_B : Shuffle
function call (input) {
  const dataset = input.split('\n')

  let cardList = []
  let shuffleCount = -1
  for (let index = 0; index < dataset.length; index++, shuffleCount--) {
    if (dataset[index] === '-') {
      console.log(cardList.join(''))
      process.exit(0)
    }

    if (shuffleCount < 0) {
      if (cardList.length >= 1) {
        console.log(cardList.join(''))
      }
      cardList = dataset[index].split('')
      shuffleCount = parseInt(dataset[++index], 10)
    } else {
      const word = cardList.splice(0, dataset[index])
      cardList.push(...word)
    }
  }
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
