
/*
var migration = true;

function quack(num) {
  for (var i = 0; i <= num; i++) {
    console.log(i);
  }
}

var fly = function (num) {
  for (var i = 0; i < num; i++) {
    console.log("Flying!");
  }
}

if (migration) {
  quack(3);

  fly(3);
}
*/

/*

var winner = function() {
  alert("WINNER!")
};

var loser = function() {
  alert("LOSER!");
}

var a = winner;
var b = loser;
var c = loser;

c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;

a();

*/

/*

function sayIt(translator) {
  var phrase = translator("Hello");
  alert(phrase);
}

function hawaiianTranslator(world) {
  if (world === "Hello") return "Aloha";
  if (world === "Goodbye") return "Aloha";
}

sayIt(hawaiianTranslator);

*/

/*
var passengers = [
  { name: "Jane Doloop", paid: true },
  { name: "Dr. Evel", paid: true },
  { name: "Sue Property", paid: false },
  { name: "John Funcall", paid: true }
];

function processPassengers(passengers, testFunction) {
  for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}

function checkNoFlyList(passenger) {
  return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
  return (!passenger.paid);
}

function printPassenger(passenger) {
  console.log("Passenger name: " + passenger.name + "; " + "Paid: " + passenger.paid);
}

var allFly = processPassengers(passengers, checkNoFlyList);

var allPaid = processPassengers(passengers, checkNotPaid);

var passengersInformation = processPassengers(passengers, printPassenger);

*/

/*
if (!allFly) {
  console.log("The plane can't take off: there is Dr. Evel.");
} else {
  console.log("All fine! Good luck!");
}

if (!allPaid) {
  console.log("The plane can't take off: not everyone has paid.");
} else {
  console.log("All fine! Good luck!");
}
*/

/*
function fun(echo) {
  console.log(echo);
};

fun("hello");

function boo(aFunction) {
  aFunction("boo");
}

boo(fun);
console.log(fun);

var moreFun = fun;
moreFun("hello again");

function echoMaker() {
  return fun;
}

var bigFun = echoMaker();
bigFun("Is there an echo?");
*/

/*
function createDrinkOrder(passenger) {
  var orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function() {
      console.log("Would you like a cocktail or wine?");
    };
  } else if (passenger.ticket === "premium") {
      orderFunction = function() {
        console.log("Would you like wine, cola or water?");
      };
  } else {
      orderFunction = function() {
        console.log("Your choice is cola or water.");
      };
  }

  return orderFunction;

}


function createDinnerOrder(passenger) {
  var orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function() {
      console.log("Would you like chicken or pasta?");
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function() {
      console.log("Would you like a snack box or cheese plate?");
    };
  } else {
    orderFunction = function() {
      console.log("Would you like peanuts or pretzels?");
    };
  }

  return orderFunction;

}


function serveCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  var getDinnerOrderFunction = createDinnerOrder(passenger);

  getDrinkOrderFunction();

  getDinnerOrderFunction();

  getDrinkOrderFunction();
  getDrinkOrderFunction();

}

function servePassengers(passengers) {
  for (var i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
}

// Variables

var passengers = [
  { name: "Jane Doloop", paid: true, ticket: "coach" },
  { name: "Dr. Evel", paid: true, ticket: "firstclass" },
  { name: "Sue Property", paid: false, ticket: "firstclass" },
  { name: "John Funcall", paid: true, ticket: "premium" }
];

// Function call

servePassengers(passengers);

*/


/* PRODUCTS */

// tests

/*
function compareNumbers(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 === num2) {
    return 0;
  } else {
    return -1;
  }
}

var numbersArray = [60, 50, 62, 58, 54, 54];

numbersArray.sort(compareNumbers);
console.log(numbersArray);
*/

// end tests

// program

  // functions

function compareSold(colaA, colaB) {
  return colaA.sold - colaB.sold;
}

function compareName(colaA, colaB) {
  var colaA = colaA.name.toUpperCase();
  var colaB = colaB.name.toUpperCase();
  if (colaA < colaB) {
    return -1;
  }
  if (colaA > colaB) {
    return 1;
  }

  return 0;
}

function compareCalories(colaA, colaB) {
  return colaA.calories - colaB.calories;
}

function compareColor(colaA, colaB) {
  var colaA = colaA.color.toUpperCase();
  var colaB = colaB.color.toUpperCase();
  if (colaA < colaB) {
    return -1;
  }
  if (colaA > colaB) {
    return 1;
  }

  return 0;
}

function printProducts(products) {
  for (var i = 0; i < products.length; i++) {
    console.log(
      "Name: " + products[i].name + ", Calories: " +
      products[i].calories + ", Color: " + products[i].color +
      ", Sold: " + products[i].sold
    );
  }
}

  // end functions

  // varibels

products = [
  { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
  { name: "Orange", calories: 160, color: "orange", sold: 12101 },
  { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
  { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
  { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
  { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
  { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
  { name: "Water", calories: 0, color: "clear", sold: 62123 }
];

  // end varibels

  // result

console.log("---------- SOURCE ----------");
printProducts(products);

console.log("---------- BY SOLD ----------");
products.sort(compareSold);
printProducts(products);

console.log("---------- BY NAME ----------");
products.sort(compareName);
printProducts(products);

console.log("---------- BY CALORIES ----------");
products.sort(compareCalories);
printProducts(products);

console.log("---------- BY COLOR ----------");
products.sort(compareColor);
printProducts(products);

  // end result

// end programs
