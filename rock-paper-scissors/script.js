
 function RockPaperScissors(){
    this.possibleChoices = ['paper', 'rock', 'scissors'];
    this.userChoice = '';
    this.computerChoice = '';

    this.getComputerChoice = function(){
        var compChoice = Math.floor(Math.random() * this.possibleChoices.length);
        return this.possibleChoices[compChoice];
      };

    this.askUserChoice = function(){
        return console.log('please choose: rock, paper, or scissors')
       };

    this.submitUserChoice = function(input){
        if(this.possibleChoices.indexOf(input) !== -1){
            return this.userChoice = input;
        }else{
            console.log('Invalid input. Please try again');
        }
    };

    this.init = function(){
        this.computerChoice = this.getComputerChoice();
        this.askUserChoice();
    };

    this.reset = function(){
        this.computerChoice = this.getComputerChoice();
        this.userChoice = '';
        this.askUserChoice();
    };

    this.checkForWin = function(){
        if(this.userChoice === this.computerChoice){
          console.log('Draw');
          this.reset();
        }else if (this.userChoice === 'paper' && this.computerChoice === 'rock' || this.userChoice === 'rock' && this.computerChoice === 'scissors' || this.userChoice === 'scissors' && this.computerChoice === 'paper'){
          console.log('You win!')
        }else{
          console.log('Computer wins.')
        }
    }
 }

/**
 * Create a new game based off our constructor function
 */
var game = new RockPaperScissors();
game.init();