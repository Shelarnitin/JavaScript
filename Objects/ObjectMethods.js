let car = {
    color: 'red',
    make: 'tata',
    model: 'curve',
    start: function (){
        return "engine has started"
    },
    displayColor: function() {
        console.log("the color of the car is " + this.color)
    }
};

let carStart = car.start();
// let carColor = car.displayColor();
// console.log(carStart)
// console.log(carColor)

let car1 = {
    brand: 'Honda',
    model: 'Civic',
    year: 2022,
    displayInfo: function() {
        // This function returns the car information as a string
        return this.brand + ' ' + this.model + ' (' + this.year + ')';
    }
};

let carInfo = car1.displayInfo();
console.log(carInfo); // 'Honda Civic (2022)'