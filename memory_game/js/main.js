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
    var score = 0;

    var flipCard = function() {
        var cardId = this.getAttribute('data-id')
        cardsInPlay.push(cards[cardId].rank);    
        console.log("User flipped " + cards[cardId].rank);
        console.log("Flipped card suit: " + cards[cardId].suit);
        console.log("Flipped card image: " + cards[cardId].cardImage);
        
        this.setAttribute('src', cards[cardId].cardImage);
        checkForMatch();
    }

    var checkForMatch = function() {
        
        if(cardsInPlay.length === 2) {
            if(cardsInPlay[0] == cardsInPlay[1]) {
                alert("You found a match!");
                
                var scoreElement = document.getElementById('score');
                scoreElement.innerHTML = "Score: " + ++score;
            } else 
                alert("Sorry, try again.");
            cardsInPlay.pop();
        }
    }
    
  var reset = function() {
        var cardImages = document.querySelectorAll('img');
            
        for(var i = 0; i < cardImages.length; i++) {
            cardImages[i].setAttribute('src', 'images/back.png');
        }
        cardsInPlay = [];
  }
  var createBoard = function() {
        for(var i = 0; i < cards.length; i++) {
            var cardElement = document.createElement('img');
            
            cardElement.setAttribute('src', 'images/back.png');
            cardElement.setAttribute('data-id', i);
            
            cardElement.addEventListener('click', flipCard);
            
            document.getElementById('game-board').appendChild(cardElement); 
            
            var resetElement = document.querySelector('button');
            resetElement.addEventListener('click', reset);
        }
    }
    
   

createBoard();
