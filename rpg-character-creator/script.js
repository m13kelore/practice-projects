function Character(name){
    this.name = name;
    this.strength = Math.ceil(Math.random () * 10);
    this.dexterity = Math.ceil(Math.random () * 10);
    this.intelligence = Math.ceil(Math.random () * 10);
    this.damage = (this.strength * this.intelligence) * .1;
    this.avasion = (this.dexterity * this.intelligence) * .1;
    this.gold = 0;
    this.health = 20;
    this.convoy = [];

    this.getStats = function(){
        console.log(this.name + ' Stats:');
        console.log('   Strength: ' + this.strength);
        console.log('   Dexterity: ' + this.dexterity);
        console.log('   Intelligence: ' + this.intelligence);
        console.log('   Gold: ' + this.gold);
        console.log('   Health: ' + this.health);
    }
}

function Adventure(character){
    console.log("What would you like to do?");
    console.log("battle(), gamble(), shop(), huntForTreasure(), visitTheBathHouse(), getInfoOnOptions()");

    this.battle = new Battle(character);
    this.gamble = new Gamble(character);
    this.shop = new Shop(character);
    this.huntForTreasure = new HuntForTreasure(character);
    this.visitTheBathHouse = new VisitBathHouse(character);

    this.getInfoOnOptions = function(){
        console.log('battle: fight against a random opponent; winning gives you +1 to a random stat and a prize of gold, losing may cost you your life');
        console.log('gamble: bet your luck to try to increase your amount of gold');
        console.log('shop: trade gold for higher stats and other items');
        console.log('huntForTreasure: go on a treasure hunt for a chance to find gold or other items');
        console.log('visitTheBathHouse: replenish your health for a small fee');
    }


}

function Battle(character){
    var opponent = new Character('opponent');
    //win: get gold + increase of random stat
    //flee: give up
    //lose: die
}

function Gamble(character){
    //bet gold
    //if you win, get gold
    //if 0 gold, do not allow to gamble
}

function Shop(character){
    //trade gold for higher stats or random objects
}

function HuntForTreasure(character){
    //pay gold to hunt for treasure
    //may find gold, random item, or nothing
}

function VisitBathHouse(character){
    //pay gold/trade object to replenish health
}



var ricken = new Character('Ricken');
var chrom = new Character('Chrom');
var stahl = new Character('Stahl');
var lucina = new Character('Lucina');
