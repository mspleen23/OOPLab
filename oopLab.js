///////////////////////////
//Part1- Humble Beginnings//
//////////////////////////

//Let’s model a simple adventurer with basic properties such as health and an inventory. 
// //We will call the adventurer “Robin.”

// const adventurer = {
// name: "Robin",
// health: 10,
// inventory: ["sword", "potion", "artifact"]
// }
// //As an additional practice exercise, create a loop that logs each item in Robin’s inventory.
// for (let index = 0; index < adventurer.inventory.length; index++) {
//     const items = adventurer.inventory[index];
    
//     console.log(items);
// }

///////////////////////////////////////////////////////////////////////////////////////////
////////Next, give Robin’s feline friend a friend of his own:
//////Add a “companion” sub-object to “Leo” with the following properties:
//////The companion’s name is “Frank.”
//////The companion’s type is “Flea.”
//////The companion has its own belongings, which includes a small hat and sunglasses.

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
}
    
    adventurer.companion={
        name: "Leo",
        type: "cat"
    }

    adventurer.companion.companion={
        name:"Frank", 
        type:"flea",
        inventory: ['small hat', 'sunglasses']
    }

    adventurer.roll = function (mod=0){
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }


// console.log(adventurer)
// adventurer.roll()
   
    //////////////////
    //Part2- Class Fantasy
    //////////////////////

    class Character {
        constructor (name) {
          this.name = name;
          this.health = 100;
          this.inventory = [];
        }
        roll(mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod; 
            console.log(`${this.name} rolled a ${result}.`);
    
          }
      }

        const robin = new Character("Robin");
        robin.inventory = ["sword", "potion", "artifact"];
        robin.companion = new Character("Leo");
        robin.companion.type = "Cat";
        robin.companion.companion = new Character("Frank");
        robin.companion.companion.type = "Flea";
        robin.companion.companion.inventory = ["small hat", "sunglasses"];

        console.log(robin)
        return result
        //I dont think i was calling this correctly to see it play out in the console. What am i doing wrong? 


/////////////////////////
//Part3//
////////////////////////

//I dont understand what is going on. Im going to have to rewatch the class and come back to this. Im struggling with this lab 