     var cards = [
        {
          rank: "queen",
          suit: "hearts",
          cardImage: "images/queen-of-hearts.png" 
        },
        {
          rank: "queen",
          suit: "diamonds",
          cardImage: "images/queen-of-diamonds.png" 
        },
        {
          rank: "king",
          suit: "hearts",
          cardImage: "images/king-of-hearts.png" 
        },
        {
          rank: "king",
          suit: "diamonds",
          cardImage: "images/king-of-diamonds.png" 
        }
    ];
    var cardsInPlay = [];

    var flipCard = function(cardId) {
        this.cardsInPlay.push(this.cards[cardId].rank);    
        console.log("User flipped " + this.cards[cardId].rank);
        console.log("Flipped card suit: " + this.cards[cardId].suit);
        console.log("Flipped card image: " + this.cards[cardId].cardImage);
        
        checkForMatch();
    }

    var checkForMatch = function() {

        if(this.cardsInPlay.length === 2) {
        if(this.cardsInPlay[0] == this.cardsInPlay[1])
            alert("You found a match!");
        else
            alert("Sorry, try again.");
    }
}


flipCard(0);
flipCard(2);
