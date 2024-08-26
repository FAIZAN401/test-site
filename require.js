// const car = require("./modules");

// console.log(car)


// Here we use requrie to first load in the whole file and then also save all the exports from modules into the variable (JSON) car 

// We can have multiple modules as well by saying module.exports = {export1:export1 ,export2:export2}
// or shortcut is just module.exports{export1,export2}

//const car = require("./modules");

// console.log(car.export1, car.export2);


// destructuring is an easier way to accesss multiple things from a file 
// syntax const { export1, export2 } = require("./modules")

const { cars,seats,tires} = require("./modules");

console.log(tires[2] + " " + cars[2] + "s");

// some modules are built in to node such as os 

const os = require("os");
console.log(os.platform())