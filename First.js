const prompt = require ("prompt-sync")({sigint: true})
let you = (height, weight) => {
  
    return {
    
        height,
        weight,
    }
    }

let pw;
let h = prompt('How many meters high are you?');
let w = prompt('How much do you weight on Earth?');
console.log(w);
 
console.log('1 Mercury');
console.log('2 Venus');
console.log('3 Mars');
console.log('4 Jupiter');
console.log('5 Saturn');
console.log('6 Uranus');
console.log('7 Neptune');
let planet = prompt('Which planet do you prefer from the list?');
planet = parseInt(planet);

switch (planet) {
    case 1: pw = w * 0.38;
    console.log(`Your weight on Mercury is: ${pw} kilos`);
    break;
    case 2: pw = w * 0.91;
    console.log(`Your weight on Venus is: ${pw} kilos`);
    break;
    case 3: pw = w * 0.38;
    console.log(`Your weight on Mars is: ${pw} kilos`);
    break;
    case 4: pw = w * 2.34;
    console.log(`Your weight on Jupiter is: ${pw} kilos`);
    break;
    case 5: pw = w * 1.06;
    console.log(`Your weight on Saturn is: ${pw} kilos`);
    break;
    case 6: pw = w * 0.92;
    console.log(`Your weight on Uranus is: ${pw} kilos`);
    break;
    case 7: pw = w * 1.19;
    console.log(`Your weight on Neptune is: ${pw} kilos`);
    break;
    default: console.log('Undefined');
    break;




}

const newYou = you(h, w)



// I will continue this later, using the object to update a profile with all the stats.
