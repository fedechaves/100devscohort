// TODO: define the Dog class here
class Dog {
    constructor(name, species, size) {
      this.name = name;
      this.species = species;
      this.size = size;
      this.xp = 0; // XP is always zero for new characters
    }
    describe() {
        return `${this.name} is a ${this.species} dog measuring ${this.size}`;
      }

    bark() {
        if (this.size > 60){
            return "Grrr! Grrr!"
        }
        else {
            return "Woof! Woof!"
        }
        
      }
    aCat() {
        return `Look, a cat! ${this.name} barks: ${this.bark()}`
    }

} 
const fang = new Dog("Fang", "boarhound", 75);
console.log(fang.describe());
console.log(fang.aCat());

const snowy = new Dog("Snowy", "terrier", 22);
console.log(snowy.describe());
console.log(snowy.aCat());

//Character inventory
class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.gold = 10;
      this.key = 1
      this.xp = 0; // XP is always zero for new characters
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          console.log(
            `${this
              .name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.gold} gold and ${target.key} key`
          );
          this.xp += bonusXP;
          this.gold += target.gold;
          this.key += target.key;
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }
    
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength and ${this.xp} XP points, he also has ${this.gold} pieces of gold and ${this.key} key`;
    }
  }

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());

//Accaount List

class BankAccount {
    constructor(name) {
      this.name = name;
      this.balance = 0;
    }
    credit(n){
        this.balance += n
    }
    describe() {
        return `owner: ${this.name} balance: ${this.balance}`;
      }


}
const sean = new BankAccount("Sean");
const brad = new BankAccount("Brad");
const georges = new BankAccount("Georges");

let AllUsers = [
    sean,
    brad,
    georges
];

sean.credit(1000);
brad.credit(1000);
georges.credit(1000);

console.log(sean.describe())
console.log(brad.describe())
console.log(georges.describe())
