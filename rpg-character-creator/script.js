function Character() {
  this.name = "";
  // this.stats = this.getStats();
  // this.startingItem = this.getStartingItem();

  this.initialize = function() {
    this.namePrompt();
  };

  this.namePrompt = function() {
    //prompt user with rules of names
    console.log("Welcome to RPG Character Creator!");
    console.log(
      "Enter your character's name using the following command: character.enterName([your character's name here])"
    );
    console.log("Rules for character names:");
    console.log("1) Name must start with a vowel");
    console.log("2) Name must have at least one consonant");
    console.log("3) Name must be between 4-10 characters in length");
    console.log("4) Name must ONLY include letters");
    console.log("Example: character.enterName('apple')");
  };

  this.enterName = function(name) {
    console.log("Checking name ...");
    this.checkName(name);
  };

  this.checkName = function(name) {
    console.log("check name is running");
    var nameLength = false;
    var firstLetter = false;
    var consonantCheck = false;
    var nonLetterCheck = false;
    var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

    if (name.length < 4) {
      console.log("Name is too short. Please try again.");
      return;
    } else if (name.length > 10) {
      console.log("Name is too long. Please try again.");
      return;
    } else {
      nameLength = true;
    }

    // if (|) {
    //   firstLetter = true;
    // } else {
    //   console.log("Invalid first letter of name. Please try again.");
    //   return;
    // }

    //check to make sure that name has a consonant
    if (name === -1) {
      console.log("Consonant check: success");
    } else {
      console.log("Invalid character in name. Please try again.");
      return;
    }

    //check to make sure names only have letters (no numbers/other characters ASCII)
  };

  this.getStats = function() {};

  this.getStartingItem = function(name) {};

  this.rollDice = function() {};
}

var character = new Character();
character.initialize();
