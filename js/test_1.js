/*
var price = 8.99;
var discount = 10;

var total = price - (price * (discount / 100));

var shipping = 10;

if (total > 25) {
  console.log("free shipping");
}
else {
  total = total + shipping;
  console.log( "Total price: " + total + " $" );
  document.write("<h2> Total price:</h2>" + total + "<h2> $</h2>");
}
*/

/*
var scoops = 5;

while (scoops > 0) {
  document.write("<p>Another scoop!<br></p>");
  scoops = scoops - 1;
}

document.write("<h2> Life without ice cream isn't the same </h2>");
*/

/*
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number 0-6):");

  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;
  }

  if (guess == location1 || guess == location2 || guess == location3) {

    alert("You hit me!");

    hits = hits + 1;

    if (hits == 3) {
      isSunk = true;
      alert("You sank my battleship!");
    }

  }else {
    alert("You miss!");
  }

}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + (3/guesses);

alert(stats);
*/

/*

function doIt(param) {
  param = 2;
}

var test = 1;
doIt(test);
console.log(test);

function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}

makeTea(3);

function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}

makeTea(3, "Earl Grey", "hey ma!", 42);
*/

/*
function bake(degrees) {

  var message;
  if (degrees > 500) {
    message = "I'm not a nuclear reactor!";

  } else if (degrees < 100) {
    message = "I'm not a refrigerator!";
  } else {
    message = "That's a very comfortable temperature for me.";

  }

  return message;

}

var status = bake(350);
console.log(status);
*/

/*
function totalPrice(price, discount) {

  var message;

  if (price <= 0 || discount < 0) {
    message = "Wrong value";
    console.log("Wrong value");

  } else {

    var total = price - (price * (discount / 100));

    var shipping = 10;

    if (total > 25) {
      message = "Free shipping. Your price - " + total;
      console.log("Free shipping. Your price - " + total);

    }
    else {
      total = total + shipping;
      message = "Your price - " + total;
      console.log("Your price - " + total);

    }

  }

  return message;

}

var status_1 = totalPrice(35, 10);
var status_2 = totalPrice("5", "15");
var status_3 = totalPrice(-5, 15);

document.write(status_1 + "<br>");
document.write(status_2 + "<br>");
document.write(status_3 + "<br>");

*/

/*
function clunk(times) {
  var num = times;

  while (num > 0) {
    display("clunk");
    num = num - 1;
  }
}

function thingamajig(size) {

  var facky = 1;
  clunkCounter = 0;

  if (size == 0) {
    display("clank");
  } else if (size == 1) {
    display("thunk");
  } else {
  while (size > 1) {
    facky = facky * size;
    size = size - 1;
  }
    clunk(facky);
  }
}

function display(output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;

}

var clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);

*/

/*
var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount;
  }

  return amount;
  cameraOn = true;
}

cameraOn = true;
var amount = steal(balance, 1250);
alert("Criminal: you stole " + amount + "!");

*/

/*
var scores = [50, 60, 58, 54, 54, 58, 50, 72, 72];
var largest = scores[0];
var counter = 0;

for (i = 0; i < scores.length; i++) {

  if (largest < scores[i]) {
    largest = scores[i];
    counter = i
  }
}

console.log(largest + " " + counter);
*/

/*
var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var output;
var highScore = 0;
var bestSolutions = [];

for (var i = 0; i < scores.length; i++) {

  output = "Bubble solution #" + i + " score: " + scores[i];

  if (scores[i] > highScore) {
    highScore = scores[i];
  }

  console.log("Bubbles tests: " + output);

}

var bestSolutions = [];

for (var i = 0; i < scores.length; i++) {
  if (scores[i] == highScore) {
    bestSolutions.push(i);
  }
}

console.log("Highest bubble score: " + highScore);
console.log("Solutions with the highest score: " + bestSolutions);
*/

/*
var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

function printAndGetHighScore(scores) {
  var highScore = 0;
  var output;
  for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);

    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}

var highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);


function getBestResults(scores, highScore) {

  var bestSolutions = [];

  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;

}

var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

var costs = [.25, .27, .25, .25, .25, .25,
             .33, .31, .25, .29, .27, .22,
             .31, .25, .25, .33, .21, .25,
             .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25,
             .25, .25, .27, .25, .26, .29];

function getMostCostEffectiveSolution(scores, costs, highScore) {
  var cost = 100;
  var index;

  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      if (cost > costs[i]) {
        index = i;
        cost = costs[i];
      }
    }
  }
  return index;
}

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");
*/

/*
var dog = {
  name: "Fido",
  weight: 20.2,
  age: 5,
  breed: "mixed",
  activity: "fetch balls"
}

var bark;

if (dog.weight > 20) {
  bark = "WOOF WOOF";
} else {
  bark = "woof woof";
}

dog.dogYears = 35;

delete dog.dogYears;

var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);
console.log(dog);
*/

/*
var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  converrtible: false,
  mileage: 1021
};

var cadi = {
  make: "Cadillac",
  model: "Escalade",
  year: 2015,
  color: "blackk",
  passengers: 6,
  converrtible: false,
  mileage: 50
};

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000
};
*/
/*
var carArr = [cadi, chevy, fiat];

function carYear(arr) {

  var year;
  var car = [];

  for (var i = 0; i < arr.length; i++) {

    car.push(arr[i]);

    if (arr[i].year > 2010) {
      year = true;

    } else {
      year = false;

    }

  }

  console.log(car);

carYear = carYear(carArr);
*/

/*

var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  converrtible: false,
  mileage: 1021
};

var cadi = {
  make: "Cadillac",
  model: "Escalade",
  year: 2015,
  color: "blackk",
  passengers: 6,
  converrtible: false,
  mileage: 50
};

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000
};

function prequal(car) {
  if (car.mileage > 100) {
    return false;
  } else if (car.year < 2010 ) {
    return false;
  }

  return true;
}

var goodCar = prequal(cadi);

if (goodCar) {
  console.log("You gotta check out this " + cadi.make + " " + cadi.model);
} else {
  console.log("You should really pass on the " + cadi.make + " " + cadi.model);
}

*/

/*
var cadi = {
  make: "Cadillac",
  model: "Escalade",
  year: 2015,
  color: "black",
  passengers: 6,
  converrtible: false,
  mileage: 50
};

var str = "Hello there!";

function word(str) {
  var word = " Hi!";
  str = str + word;
  return str;
}

function objChange(obj){
  obj.speed = "200 km/h";

  return obj;
}

var obj = objChange(cadi);
console.log(cadi);
*/

/*
function getSecret(file, secretPassword) {
  file.opened = file.opened + 1;

  if (secretPassword == file.password) {
    return file.contents;
  }
  else {
    return "Invalid password";
  }
}

function setSecret(file, secretPassword, secret) {
  if (secretPassword == file.password) {
    file.opened = 0;
    file.contents = secret;
  }
}

var superSecretFile = {
  level: "classified",
  opened: 0,
  password: 2,
  contents: "Dr. Evel's next meeting is in Detroit."
};

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");

secret = getSecret(superSecretFile, 2);
console.log(secret);
*/

/*
function makeCar() {

  var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
  var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
  var years = [1955, 1957, 1948, 1954, 1961];
  var colors = ["red", "blue", "tan", "yellow", "white"];
  var convertible = [true, false];

  var rand1 = Math.floor(Math.random() * makes.length);
  var rand2 = Math.floor(Math.random() * models.length);
  var rand3 = Math.floor(Math.random() * years.length);
  var rand4 = Math.floor(Math.random() * colors.length);
  var rand5 = Math.floor(Math.random() * 5) + 1;
  var rand6 = Math.floor(Math.random() * 2);

  var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0
  };

  return car;

}

function displayCar(car) {
  console.log(car);
}

var carToSell = makeCar();
displayCar(carToSell);
*/

/*
var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  start: function() {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      console.log("Zoooooom zooooooooom");
    } else {
      console.log("You need to start the engine first.");
    }
  }
};

fiat.drive();
*/

/*
eightBall = {
  index: 0,
  advice: ["yes", "no", "maybe", "not a chance"],
  shake: function() {
    this.index = this.index + 1;
    if (this.index >= this.advice.length) {
      this.index = 0;
    }
  },
  look: function() {
    return this.advice[this.index];
  }
}

eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
*/

/*
var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  converrtible: false,
  mileage: 1021,
  started: false,
  start: function() {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      console.log(this.make + " " + this.model + " goes zoooooom zooooooooom");
    } else {
      console.log("You need to start the engine first.");
    }
  }
};

var cadi = {
  make: "Cadillac",
  model: "Escalade",
  year: 2015,
  color: "blackk",
  passengers: 6,
  converrtible: false,
  mileage: 50,
  started: false,
  start: function() {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      console.log(this.make + " " + this.model + " goes zoooooom zooooooooom");
    } else {
      console.log("You need to start the engine first.");
    }
  }
};

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  start: function() {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      console.log(this.make + " " + this.model + " goes zoooooom zooooooooom");
    } else {
      console.log("You need to start the engine first.");
    }
  }
};

cadi.start();
cadi.drive();
cadi.stop();
chevy.start();
chevy.drive();
chevy.stop();
fiat.start();
fiat.drive();
fiat.stop();
*/

/*
var cadi = {
  make: "Cadillac",
  model: "Escalade",
  year: 2015,
  color: "blackk",
  passengers: 6,
  converrtible: false,
  mileage: 50,
  started: false,
  start: function() {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function() {
    if (this.started) {
      console.log(this.make + " " + this.model + " goes zoooooom zooooooooom");
    } else {
      console.log("You need to start the engine first.");
    }
  }
};

for (var prop in cadi) {
  console.log(prop + ":" + cadi[prop]);
}
console.log(cadi["make"]);
*/


/*
var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  fuel: 0,
  start: function() {
    if (this.fuel > 0) {
      this.started = true;
    } else {
      console.log("The car is on empty, fill up before starting!");
    }
  },
  stop: function () {
    this.started = false;
  },
  drive: function() {
    if (this.started) {

      if (this.fuel > 0) {
        console.log(this.make + " " + this.model + " goes zoom zoom");
        this.fuel = this.fuel - 1;
      } else {
        console.log("Out of fuel");
        this.stop();
      }
    } else {
      console.log("You need to start the engine first.");
    }
  },
  addFuel: function(amount) {
    this.fuel = this.fuel + amount;
  }
};

fiat.addFuel(5);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();
*/

/*
var access = document.getElementById("code9");

var code = access.innerHTML;
code = code + " midnight";
alert(code);
*/

/*
function init () {
  var planet = document.getElementById("greenplanet");
  planet.innerHTML = "Red Alert: hit by phaser fire!";
  planet.setAttribute("class", "redtext");

  idText = planet.getAttribute("id");
  console.log(idText);
}
window.onload = init;
*/

/*
var arr = [10, 10.5, "10", false];

for (var i = 0; i < arr.length; i++) {

  var type = typeof arr[i];
  console.log(type);

}
*/

/*
var test1 = "abcdef";
var test2 = 123;
var test3 = true;

var test4 = {};

var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9(){return "abcdef"};

var test10 = null;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);
*/

/*
var a = 0/0;
console.log(a);
*/

/*
var a = "1";
console.log(3 + " bananas " + 2 + " apples");
*/

/*
function findCarInLot(car) {

  for (var i = 0; i < lot.length; i++) {
    if (car === lot[i]) {
      console.log('Position in array lot is ' + i);
      return i;
    }
  }
  console.log('What is going on?');
  return -1;
}

var chevy = {
  make: "Chevy",
  model: "Bel Air"
};

var taxi = {
  make: "Webville Motors",
  model: "Taxi"
};

var fiat1 = {
  make: "Fiat",
  model: "500"
};

var fiat2 = {
  make: "Fiat",
  model: "500"
};

var lot = [chevy, taxi, fiat1, fiat2];

var loc1 = findCarInLot(fiat2);
var loc2 = findCarInLot(taxi);
var loc3 = findCarInLot(chevy);
var loc4 = findCarInLot(fiat1);

console.log(loc1);
console.log(loc2);
console.log(loc3);
console.log(loc4);
*/

/*
function lieDetectorTest() {
  var lies = 0;

  var stolenDiamond = { };
  if (stolenDiamond) {
    console.log("You stole the diamond");
    lies++;
  }

  var car = {
    keysInPocket: null
  };

  if (car.keysInPocket) {
    console.log("Uh oh, guess you stole the car!");
    lies++;
  }
  if (car.emptyGasTank) {
    console.log("You drove the car after you stole it!");
    lies++;
  }

  var foundYouAtTheCrimeScene = [ ];
  if (foundYouAtTheCrimeScene) {
    console.log("A sure sign of guilt");
    lies++;
  }
  if (foundYouAtTheCrimeScene[0]) {
    console.log("Caught with a stolen item!");
    lies++;
  }

  var yourName = " ";
  if (yourName) {
    console.log("Guess you lied about your name");
    lies++;
  }
  return lies;
}

var numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");

if (numberOfLies >= 3) {
  console.log("Guilty as charged");
}
*/

/*
var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
var presentableText = text.toLowerCase();

if (presentableText.length > 0) {
  alert(presentableText);
}
*/

/*
var name = "Jenny";
var phone = "867-5309";
var fact = "This is a prime number";
var songName = phone + "/" + name;

console.log(songName);

var index = phone.indexOf("-");
if (fact.substring(10, 15) === "prime") {
  alert(fact);
}
*/

/*
var input = "jenny@wickedlysmart.com";
for (var i = 0; i < input.length; i++) {
  if (input.charAt(i) === "j") {
    console.log(i);
  }
}
*/

/*
var phrase = "the cat in the hat";
var index = phrase.indexOf("dog");
console.log("there's a cat sitting at index " + index);
*/

/*
var data = "name phone address";
var vals = data.split(" ");
console.log("Split array is ", vals);
*/

/*
var str = "123-4567";

function whatString (phoneNumber) {

  if (phoneNumber.length !== 8 || phoneNumber.length < 7) {
    return false;
  }

  var first = phoneNumber.substring(0,3);
  var second = phoneNumber.substring(phoneNumber.length - 4);

  if (phoneNumber.length === 8) {
    return (phoneNumber.charAt(3) === "-");
  }

  return true;
}

var a = whatString(str);
console.log(a);

function validate(phoneNumber) {
  return phoneNumber.match(/^\d{3}-?\d{4}$/);
}
*/

/*
function Duck(sound) {
  this.sound = sound;
  this.quack = function() {console.log(this.sound);}
}

var toy = new Duck("quack quack");

toy.quack();

console.log(typeof toy);
console.log(toy instanceof Duck);
*/

/*
var ships = [
  {
    locations: ["31", "41", "51"],
    hits: ["", "", ""]
  },
  {
    locations: ["14", "24", "34"],
    hits: ["", "hit", ""]
  },
  {
    locations: ["00", "01", "02"],
    hits: ["hit", "", ""]
  }];

var ship2 = ships[1];
var locations = ship2.locations;
console.log("Location is " + locations[1]);
*/

/*
var ships = [
  {
    locations: ["31", "41", "51"],
    hits: ["", "", ""]
  },
  {
    locations: ["14", "24", "34"],
    hits: ["", "hit", ""]
  },
  {
    locations: ["00", "01", "02"],
    hits: ["hit", "", ""]
  }
];


var ship3 = ships[2];
var hits = ship3.hits;
if (hits[0] === "hit") {
  console.log("Ouch, hit on third ship at location one");
}
*/

/*
var ships = [
  {
    locations: ["31", "41", "51"],
    hits: ["", "", ""]
  },
  {
    locations: ["14", "24", "34"],
    hits: ["", "hit", ""]
  },
  {
    locations: ["00", "01", "02"],
    hits: ["hit", "", ""]
  }
];

var ship1 = ships[0];
var hits = ship1.hits;
hits[0] = "hit";
console.log(hits);
*/



/* WAR SHIP */

var view = {
  displayMessage: function(msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};

var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipSunk: 0,
  ships: [
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] }
	],
  fire: function(guess) {
    for (var i = 0; i < this.numShips; i++) {

      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);

      if (index >= 0) {
        ship.hits[index] = "hit";

        view.displayHit(guess);
        view.displayMessage("HIT!");

        if (this.isSunk(ship)) {
          view.displayMessage("You sank my battleship!");
          this.shipSunk++;
        }
        return true;
      }

    }
    view.displayMiss(guess);
    view.displayMessage("You missed");
    return false;
  },
  isSunk: function(ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  },
  generateShipLocations: function() {
    var locations;
    for (var i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  },
  generateShip: function() {
    var direction = Math.floor(Math.random() *2);
    var row, col;

    if (direction === 1) {
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
    }else {
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
      col = Math.floor(Math.random() * this.boardSize);
    }

    var newShipLocations = [];
    for (var i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(row + "" + (col + i));
      } else {
        newShipLocations.push((row + i) + "" + col);
      }
    }
    return newShipLocations;
  },
  collision: function(locations) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = model.ships[i];
      for (var j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  }

};

var controller = {
  guesses: 0,

  processGuess: function(guess) {
    var location = parseGuess(guess);
    if (location) {
      this.guesses++;
      var hit = model.fire(location);

      if (hit && model.shipSunk) {

      }
    }

  }
};

function parseGuess(guess) {
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

  if (guess === null || guess.length !== 2) {
    alert("Oops, please enter a letter and a number on the board.");
  } else {
    var firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert("Oops, that isn't on the board.");
    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
      alert("Oops, that's off the board!");
    } else {
      return row + column;
    }
  }
  return null;
};

function init() {
  var fireButton = document.getElementById('fireButton');
  fireButton.onclick = handleFireButton;
  var guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKeyPress;

  model.generateShipLocations();
}

window.onload = init;

function handleFireButton() {
  var guessInput = document.getElementById("guessInput");
  var guess = guessInput.value;
  controller.processGuess(guess);

  guessInput.value = "";
}

function handleKeyPress(e) {
  var fireButton = document.getElementById("fireButton");
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

/* END WAR SHIP */

/*
var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,

	ships: [
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] }
	],
	fire: function(guess) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);

			// here's an improvement! Check to see if the ship
			// has already been hit, message the user, and return true.
			if (ship.hits[index] === "hit") {
				view.displayMessage("Oops, you already hit that location!");
				return true;
			} else if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("HIT!");

				if (this.isSunk(ship)) {
					view.displayMessage("You sank my battleship!");
					this.shipsSunk++;
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("You missed.");
		return false;
	},

	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++)  {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
	    return true;
	},

	generateShipLocations: function() {
		var locations;
		for (var i = 0; i < this.numShips; i++) {
			do {
				locations = this.generateShip();
			} while (this.collision(locations));
			this.ships[i].locations = locations;
		}
		console.log("Ships array: ");
		console.log(this.ships);
	},

	generateShip: function() {
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		if (direction === 1) { // horizontal
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
		} else { // vertical
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
			col = Math.floor(Math.random() * this.boardSize);
		}

		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			} else {
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},

	collision: function(locations) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}

};


var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}

};

var controller = {
	guesses: 0,

	processGuess: function(guess) {
		var location = parseGuess(guess);
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
					view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
			}
		}
	}
}


// helper function to parse a guess from the user

function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter a letter and a number on the board.");
	} else {
		var firstChar = guess.charAt(0);
		var row = alphabet.indexOf(firstChar);
		var column = guess.charAt(1);

		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		} else if (row < 0 || row >= model.boardSize ||
		           column < 0 || column >= model.boardSize) {
			alert("Oops, that's off the board!");
		} else {
			return row + column;
		}
	}
	return null;
}


// event handlers

function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value.toUpperCase();

	controller.processGuess(guess);

	guessInput.value = "";
}

function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");

	// in IE9 and earlier, the event object doesn't get passed
	// to the event handler correctly, so we use window.event instead.
	e = e || window.event;

	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}


// init - called when the page has completed loading

window.onload = init;

function init() {
	// Fire! button onclick handler
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;

	// handle "return" key press
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;

	// place the ships on the game board
	model.generateShipLocations();
}
*/
