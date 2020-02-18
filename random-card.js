const max = 52; //0 ~ max-1
var bjDeck = [];
for (let i = 0; i < max; i++) {
  bjDeck.push(i);
}

function rdm() {
  return Math.floor(Math.random() * max);
}

function shuffleDeck(pid) {
  let array = [];
  while (bjDeck.length > 0) {
    let temp = rdm();
    if (bjDeck.includes(temp)) {
      let p = bjDeck.indexOf(temp);
      bjDeck[p] = bjDeck[0];
      bjDeck.shift();
      array.push(temp);
    }
  }
  bjDeck = array;
  //dummy for testing purpose
  // bjDeck = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
}

function beautify(deck) {
  let beautifyDeck = [];
  for (let i = 0; i < deck.length; i++) {
    beautifyDeck[i] = cardGenerator(deck[i]);
    if (i == max / 2) {
      beautifyDeck[max / 2] = '<br/>' + beautifyDeck[max / 2];
    }
    if (i == index) {
      beautifyDeck[i] = beautifyDeck[i] + '@'
    }
  }
  return beautifyDeck;
}

function cardSuit(card) {
  let suit = Math.floor(card / 13);
  switch (suit) {
    case 0:
      return '&spades;';
      break;
    case 1:
      return '&hearts;';
      break;
    case 2:
      return '&clubs;';
      break;
    case 3:
      return '&diams;';
      break;
    default:
      break;
  }
}

function cardNum(card) {
  let value = card % 13;
  switch (value) {
    case 0:
      return 'A';
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return value + 1;
      break;
    case 10:
      return 'J';
      break;
    case 11:
      return 'Q';
      break;
    case 12:
      return 'K';
      break;
    default:
      break;
  }
}

function cardGenerator(card) {
  return cardSuit(card) + cardNum(card);
}

function cardValue(card) {
  let value = card % 13;
  switch (value) {
    case 0:
      return 11;
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return value + 1;
      break;
    case 10:
    case 11:
    case 12:
      return 10;
      break;
    default:
      break;
  }
}
