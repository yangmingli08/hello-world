Version 1.0 Naive Black Jack Sat Feb 15 2020 13:43:14 GMT+1100 (Australian Eastern Daylight Time)
Author Maurice Mingli Yang yangmingli08@icloud.com

1.  Initialise the deck (shuffle):
    Generate an array with a length of 52; [bjDeck]
    Generate a random number [0-51]. If it is in the initial array, put it in new random array and delete it from initial array till all elements have been put into the new array; {shuffleDeck}
    Let the initial array equal the new random array;
    Dummy deck can put into  {shuffleDeck} function;

2.  Give the value and character to each cards [0-51]

3.  Deal card:
    Clear the flags, parameters and html elements;{clear}
    There is a global index that counts the card sequence;[index]
    For each card dealt, parameter is the p element id;[p id p0-p9 d0-d9]
    For each card dealt, there is card value return and index number increase;{dealCard}
    The card is only put in the p elements that initialised at the beginning; innerHTML
    One card for dealer and two cards for player. [p id dealer, player, player2]

4.  Hit: {hit}
    Can occur only player hand less or equal to 21, otherwise bust and stop the game;
    {announceWinner}[flag = false]

5.  Stay: {stay}
    Dealer will draw cards:
      a.Dealer bust, stop the game;{announceWinner}[flag = false]
      b.Dealer has hand over 16, compare who is bigger then;{announceWinner}[flag = false]

6.  Ace solution:
    Set default value 11;
    Count the Ace numbers for both player and dealer;
    If Ace number large than 0 and bust, decrease the Ace number and total value minus 10;
    So basically parameter [playerAceCount] and [dealerAceCount] are counting the Aces that is not 1;

7.  Functions hopefully implement in the future:
    Split and Double;
    More than 1 deck maybe 8;
    Give a real card for each card draw;{image}
    Win rate of each hand and recommendations of hit stay split and double;
