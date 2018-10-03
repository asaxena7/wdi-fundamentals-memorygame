console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var flipCard = function(cardId) {
    this.cardsInPlay.push(cardId);    
    console.log("User flipped " + cardId);
    
    if(this.cardsInPlay.length === 2) {
    if(this.cardsInPlay[0] == this.cardsInPlay[1])
        alert("You found a match!");
    else
        alert("Sorry, try again.");
}
}


flipCard(cards[0]);
flipCard(cards[2]);
