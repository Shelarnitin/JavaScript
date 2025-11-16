// // Define a class to represent a VideoGame
// class VideoGame {
//     constructor(title, genre) {
//         this.title = title;
//         this.genre = genre;
//     }
//     displayInfo() {
//         console.log(`${this.title} is a ${this.genre} game.`);
//     }
// }

// // Create an instance of the VideoGame class with constants
// let racingGame = new VideoGame('SpeedRacer', 'racing');
// racingGame.displayInfo(); // Outputs: SpeedRacer is a racing game.


class VideoGame {
    constructor(title, genere){
        this.title = title;
        this.genere = genere;
    }

    displayInfo() {
        console.log(`${this.title} is a ${this.genere} game`)
    }
}

let racingCar = new VideoGame('Speedracer', "racing")
racingCar.displayInfo()

/********************************************************************** */

class Console {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

class HandheldConsole extends Console {
    // TODO: Add a constructor function that sets the brand, model, and batteryLife properties
    constructor(brand, model, batteryLife) {
        super(brand, model);  
        this.batteryLife = batteryLife;
    }

    // TODO: Implement the getDescription function that prints out "This is a [brand] [model] with a battery life of [batteryLife] hours."
     getDescription() {
        console.log(`This is a ${this.brand} ${this.model} with a battery life of ${this.batteryLife} hours.`);
    }
}

let myConsole = new HandheldConsole('Nintendo', 'Switch', 5);
myConsole.getDescription();



/*************************************************************** */



// TODO: Create a class named 'GameConsole'
// TODO: Add a constructor that takes 'brand' and 'model' as parameters
// TODO: Create a method named 'describe' that outputs the brand and model in a console log
class GameConsole {
    constructor(brand, model){
        this.brand = brand
        this.model = model
    }
    
    describe(){
        console.log(`my brand is ${this.brand} my model is ${this.model}`)
    }
}
let myConsole1 = new GameConsole('YourBrand', 'YourModel');
myConsole1.describe(); // Should output: This console is a YourBrand YourModel.