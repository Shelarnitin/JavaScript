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

//  The given code demonstrates the use of arrow functions, spread operator, and array destructuring to prepare a recipe.

// Recipe Book using ES6+ features
const combineItoms = (itom1, itom2, ...rest) => {
  console.log(`Mixing ${itom1} and ${itom2} with additional ingredients: ${rest.join(', ')}`);
  // The rest.join(', ') operation creates a string from the elements of the array rest by concatenating them with a given separator ', '
};

const [mainItom, secondaryItom, ...additionalItom] = ['flour', 'water', 'salt', 'yeast'];
combineItoms(mainItom, secondaryItom, ...additionalItom);