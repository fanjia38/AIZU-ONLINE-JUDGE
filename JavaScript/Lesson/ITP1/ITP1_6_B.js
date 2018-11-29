// 6_B : Finding Missing Cards
const MARK_S = 'S'
const MARK_H = 'H'
const MARK_C = 'C'
const MARK_D = 'D'
const MAX_CARD_NUMBER = 13

function missingCard (mark, list) {
  for (let index = 1; index <= MAX_CARD_NUMBER; index++) {
    if (!list[index]) {
      console.log(`${mark} ${index}`)
    }
  }
}

function call (input) {
  let inputList = input.split('\n')

  const num = parseInt(inputList.shift(), 10)
  const cards = {}

  for (let index = 0; index < num; index++) {
    let [mark, number] = inputList[index].split(' ')
    number = parseInt(number, 10)
    if (typeof cards[mark] === 'undefined') {
      cards[mark] = {}
    }
    cards[mark][number] = true
  }

  missingCard(MARK_S, cards[MARK_S])
  missingCard(MARK_H, cards[MARK_H])
  missingCard(MARK_C, cards[MARK_C])
  missingCard(MARK_D, cards[MARK_D])
}

// input
call(require('fs').readFileSync('/dev/stdin', 'utf8'))
