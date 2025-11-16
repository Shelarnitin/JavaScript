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