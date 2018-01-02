function Deck(){
    this.card1 = {
        suite: 'hearts',
        number: 'A'
    };
    this.card2 = {
        suite: 'hearts',
        number: '2'
    };
    this.card3 = {
        suite: 'hearts',
        number: '3'
    };
    this.card4 = {
        suite: 'hearts',
        number: '4'
    };
    this.card5 = {
        suite: 'hearts',
        number: '5'
    };
    this.card6 = {
        suite: 'hearts',
        number: '6'
    };
    this.card7 = {
        suite: 'hearts',
        number: '7'
    };
    this.card8 = {
        suite: 'hearts',
        number: '8'
    };
    this.card9 = {
        suite: 'hearts',
        number: '9'
    };
    this.card10 = {
        suite: 'hearts',
        number: '10'
    };
    this.card11 = {
        suite: 'hearts',
        number: 'J'
    };
    this.card12 = {
        suite: 'hearts',
        number: 'Q'
    };
    this.card13 = {
        suite: 'hearts',
        number: 'K'
    };
    this.card14 = {
        suite: 'diamonds',
        number: 'A'
    };
    this.card15 = {
        suite: 'diamonds',
        number: '2'
    };
    this.card16 = {
        suite: 'diamonds',
        number: '3'
    };
    this.card17 = {
        suite: 'diamonds',
        number: '4'
    };
    this.card18 = {
        suite: 'diamonds',
        number: '5'
    };
    this.card19 = {
        suite: 'diamonds',
        number: '6'
    };
    this.card20 = {
        suite: 'diamonds',
        number: '7'
    };
    this.card21 = {
        suite: 'diamonds',
        number: '8'
    };
    this.card22 = {
        suite: 'diamonds',
        number: '9'
    };
    this.card23 = {
        suite: 'diamonds',
        number: '10'
    };
    this.card24 = {
        suite: 'diamonds',
        number: 'J'
    };
    this.card25 = {
        suite: 'diamonds',
        number: 'Q'
    };
    this.card26 = {
        suite: 'diamonds',
        number: 'K'
    };
    this.card27 = {
        suite: 'clubs',
        number: 'A'
    };
    this.card28 = {
        suite: 'clubs',
        number: '2'
    };
    this.card29 = {
        suite: 'clubs',
        number: '3'
    };
    this.card30 = {
        suite: 'clubs',
        number: '4'
    };
    this.card31 = {
        suite: 'clubs',
        number: '5'
    };
    this.card32 = {
        suite: 'clubs',
        number: '6'
    };
    this.card33 = {
        suite: 'clubs',
        number: '7'
    };
    this.card34 = {
        suite: 'clubs',
        number: '8'
    };
    this.card35 = {
        suite: 'clubs',
        number: '9'
    };
    this.card36 = {
        suite: 'clubs',
        number: '10'
    };
    this.card37 = {
        suite: 'clubs',
        number: 'J'
    };
    this.card38 = {
        suite: 'clubs',
        number: 'Q'
    };
    this.card39 = {
        suite: 'clubs',
        number: 'K'
    };
    this.card40 = {
        suite: 'spades',
        number: 'A'
    };
    this.card41 = {
        suite: 'spades',
        number: '2'
    };
    this.card42 = {
        suite: 'spades',
        number: '3'
    };
    this.card43 = {
        suite: 'spades',
        number: '4'
    };
    this.card44 = {
        suite: 'spades',
        number: '5'
    };
    this.card45 = {
        suite: 'spades',
        number: '6'
    };
    this.card46 = {
        suite: 'spades',
        number: '7'
    };
    this.card47 = {
        suite: 'spades',
        number: '8'
    };
    this.card48 = {
        suite: 'spades',
        number: '9'
    };
    this.card49 = {
        suite: 'spades',
        number: '10'
    };
    this.card50 = {
        suite: 'spades',
        number: 'J'
    };
    this.card51 = {
        suite: 'spades',
        number: 'Q'
    };
    this.card52 = {
        suite: 'spades',
        number: 'K'
    };

}

function Blackjack(){
    this.deck = new Deck();
    this.deckCount = 52;

    this.playersCards = {};
    this.playerCount = 0;
    this.playerTotal = null;

    this.houseCards = {};
    this.houseCount = 0;
    this.houseTotal = null;

    this.hit = function(){

        if(this.playerTotal >= 21){
            console.log('Cannot deal another card. Please start a new game');
            return;
        }

        var cards = Object.keys(this.deck);
        var randomCard = cards[Math.floor(Math.random() * this.deckCount)];

        this.playersCards['Card' + (this.playerCount + 1)] = this.deck[randomCard];
        console.log('Your card is: ' + this.playersCards['Card' + (this.playerCount + 1)]['suite'],this.playersCards['Card' + (this.playerCount + 1)]['number']);

        delete this.deck[randomCard];
        this.deckCount--;
        this.playerCount++;
        this.checkWin();
    };

    this.addToTotal = function(card){
        if(!isNaN(card['number'])){
            this.playerTotal += parseInt(card.number);
        }else if(card['number'] === 'J' || card['number'] === 'Q' || card['number'] === 'K'){
            this.playerTotal += 10;
        }else if(card['number'] === 'A'){
            this.playerTotal += 11;
        }
    };

    this.checkWin = function(){
        this.addToTotal(this.playersCards['Card' + (this.playerCount)]);

        if(this.playerCount < 2){
            this.hit();
        }else if(this.playerTotal > 21){
            console.log('You lose. Try again');
        }else if(this.playerTotal === 21){
            console.log('You win!');
        }else if(this.playerTotal < 21 && this.playerCount === 5){
            console.log('You win!');
        }else{
            console.log('Hit or stand?');
        }
    };

    this.stand = function(){
        this.dealHouse();
        this.addToHouse(this.houseCards['Card' + (this.houseCount)]);

        if(this.houseTotal < 2){
            this.stand();
        }else if(this.houseTotal > 21){
            console.log('You win!');
        }else if(this.houseTotal === 21){
            console.log('House wins. Try again.');
        }else if(this.houseTotal < 21 && this.houseTotal > this.playerTotal && this.houseTotal === 5){
            console.log('House wins. Try again.');
        }else{
            this.stand();
        }


    };

    this.dealHouse = function(){

        var cards = Object.keys(this.deck);
        var randomCard = cards[Math.floor(Math.random() * this.deckCount)];

        this.houseCards['Card' + (this.houseCount + 1)] = this.deck[randomCard];
        console.log('The card is: ' + this.houseCards['Card' + (this.houseCount + 1)]['suite'],this.houseCards['Card' + (this.houseCount + 1)]['number']);

        delete this.deck[randomCard];
        this.deckCount--;
        this.houseCount++;
    };

    this.addToHouse = function(card){
        if(!isNaN(card['number'])){
            this.houseTotal += parseInt(card.number);
        }else if(card['number'] === 'J' || card['number'] === 'Q' || card['number'] === 'K'){
            this.houseTotal += 10;
        }else if(card['number'] === 'A'){
            this.houseTotal += 11;
        }
    };

}

var newGame = new Blackjack();