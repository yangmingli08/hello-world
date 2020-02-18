var index = -1;
var dealerAceCount = 0;
var playerAceCount = 0;
var dValue = 0;
var pValue = 0;
var pid = 0;
var did = 0;
var flag = false;

var deckImgUrl = ['https://i.imgur.com/J2mbtqR.png?c=2', 'https://i.imgur.com/4gq1Pqg.png?c=2', 'https://i.imgur.com/Q0zSr99.png?c=2', 'https://i.imgur.com/5eUCKHd.png?c=2', 'https://i.imgur.com/scfnvDe.png?c=2', 'https://i.imgur.com/eEke4jB.png?c=2', 'https://i.imgur.com/CIefsnU.png?c=2', 'https://i.imgur.com/K7usiJn.png?c=2', 'https://i.imgur.com/tcs05Uw.png?c=2', 'https://i.imgur.com/O35oezu.png?c=2', 'https://i.imgur.com/nTU9ImB.png?c=2', 'https://i.imgur.com/J7PxCqp.png?c=2', 'https://i.imgur.com/IT1e3Ax.png?c=2', 'https://i.imgur.com/fwD85z8.png?c=2', 'https://i.imgur.com/aNwoHur.png?c=2', 'https://i.imgur.com/6larBKZ.png?c=2', 'https://i.imgur.com/sce9Qj7.png?c=2', 'https://i.imgur.com/DMRWN7C.png?c=2', 'https://i.imgur.com/3SNAjuf.png?c=2', 'https://i.imgur.com/M0pyaDb.png?c=2', 'https://i.imgur.com/EVqZ21z.png?c=2', 'https://i.imgur.com/WVi037q.png?c=2', 'https://i.imgur.com/SfvgWR4.png?c=2', 'https://i.imgur.com/ogptRhX.png?c=2', 'https://i.imgur.com/J5wFXX7.png?c=2', 'https://i.imgur.com/uoug5ar.png?c=2', 'https://i.imgur.com/FXsorAV.png?c=2', 'https://i.imgur.com/4gq1Pqg.png?c=2', 'https://i.imgur.com/nDtPc9M.png?c=2', 'https://i.imgur.com/h6OJoxZ.png?c=2', 'https://i.imgur.com/5V0j7D3.png?c=2', 'https://i.imgur.com/z7hZPxS.png?c=2', 'https://i.imgur.com/UXGHCZX.png?c=2', 'https://i.imgur.com/pvY3jtW.png?c=2', 'https://i.imgur.com/IeaA8YR.png?c=2', 'https://i.imgur.com/w7CyIcH.png?c=2', 'https://i.imgur.com/GhWUXbT.png?c=2', 'https://i.imgur.com/J7PxCqp.png?c=2', 'https://i.imgur.com/SzIOl3K.png', 'https://i.imgur.com/RaJ9qxu.png?c=2', 'https://i.imgur.com/ObVk8lv.png?c=2', 'https://i.imgur.com/K9FaD2e.png?c=2', 'https://i.imgur.com/zFZUdfv.png?c=2', 'https://i.imgur.com/93BSk1Z.png?c=2', 'https://i.imgur.com/mTja9Vo.png?c=2', 'https://i.imgur.com/6PuByUH.png?c=2', 'https://i.imgur.com/4lQ70ac.png?c=2', 'https://i.imgur.com/Wh7kfyX.png', 'https://i.imgur.com/8ocr677.png?c=2', 'https://i.imgur.com/GnolzMW.png', 'https://i.imgur.com/YIsVZRC.png?c=2', 'https://i.imgur.com/u7UFhUK.png?c=2']


function dealCard(pid, receiver) {
  index++;
  if (index == max) {
    alert('No more cards!');
    location.reload();
  }
  console.log((index + 1) + 'nd card dealt, which is ' + cardGenerator(bjDeck[index]) + ' with a value of ' + cardValue(bjDeck[index]));
  document.getElementById(pid).innerHTML = cardGenerator(bjDeck[index])+'<img class=\'card\' src=\"' + deckImgUrl[bjDeck[index]] + '\">';

  if (cardValue(bjDeck[index]) == 11) {
    receiver == 'dealer' ? dealerAceCount++ : receiver == 'player' ? playerAceCount++ : receiver = 'nobody';
    console.log(receiver.toUpperCase() + ' just got an Ace! Dealer:Player ACE ' + dealerAceCount + ':' + playerAceCount);
  }
  return cardValue(bjDeck[index]);
}

function clear() {
  flag = true;
  dealerAceCount = 0;
  playerAceCount = 0;
  dValue = 0;
  pValue = 0;
  pid = 0;
  did = 0;
  document.getElementById('dResult').innerHTML = 'DEALER';
  document.getElementById('pResult').innerHTML = 'PLAYER';

  for (let i = 0; i < 10; i++) {
    document.getElementById('d' + i).innerHTML = '';
    document.getElementById('p' + i).innerHTML = '';
  }
}


function deal() {
  clear();
  dValue = dealCard('dealer', 'dealer');
  pValue = dealCard('player', 'player') + dealCard('player2', 'player');
  document.getElementById('dealersValue').innerHTML = 'Dealer\'s value is ' + dValue;
  if (pValue == 22) {
    pValue -= 10;
    playerAceCount--;
  }
  document.getElementById('playersValue').innerHTML = 'Player\'s value is ' + pValue;
}

function hit() {
  if (flag == false) {
    alert('Hit deal to start!');
  } else if (pValue == 21) {
    alert('You have 21!');
  } else {
    pValue += dealCard('p' + pid, 'player');
    if (pValue > 21) {
      if (playerAceCount > 0) {
        playerAceCount--;
        pValue -= 10;
      } else {
        alert('Player Bust!');
        announceWinner('dealer', dValue, pValue);
      }
    }
    document.getElementById('playersValue').innerHTML = 'Player\'s value is ' + pValue;
    pid++;
  }
}

function stay() {
  if (flag == false) {
    alert('Hit deal to start!');
  } else {
    while (dValue < 17) {
      dValue += dealCard('d' + did, 'dealer');
      document.getElementById('dealersValue').innerHTML = 'Dealer\'s value is ' + dValue;
      did++;
      if (dValue > 21 && dealerAceCount > 0) {
        dealerAceCount--;
        dValue -= 10;
        document.getElementById('dealersValue').innerHTML = 'Dealer\'s value is ' + dValue;
      }
    }
    if (dValue > 21) {
      alert('Dealer Bust!');
      announceWinner('player', dValue, pValue);
    } else {
      dValue > pValue ? announceWinner('dealer', dValue, pValue) : dValue < pValue ? announceWinner('player', dValue, pValue) : announceWinner('draw', dValue, pValue);
    }
  }
}

function announceWinner(winner, d, p) {
  if (winner == 'dealer') {
    alert('Dealer WIN!');
    document.getElementById('dResult').innerHTML = 'Dealer Win  on hand ' + d;
    document.getElementById('pResult').innerHTML = 'Player Lose on hand ' + p;
  } else if (winner == 'player') {
    alert('player WIN!');
    document.getElementById('dResult').innerHTML = 'Dealer Lose on hand ' + d;
    document.getElementById('pResult').innerHTML = 'Player Win  on hand ' + p;
  } else {
    alert('DRAW');
    document.getElementById('dResult').innerHTML = 'Draw on hand ' + d;
    document.getElementById('pResult').innerHTML = 'Draw on hand ' + p;
  }
  flag = false;
}
