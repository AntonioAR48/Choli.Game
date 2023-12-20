//Deck of cards//

class Deck {
    constructor() {
      this.deck = [];

const suits = ["Diamonds", "Spades", "Clubs", "Hearts"]; 
const rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

for (let suit in suits) {
    for (let value in rank) {



      this.deck.push(`${rank[value]} of ${suits[suit]}`);



    }
  }
}
}

const deck1 = new Deck();
console.log(deck1.deck);