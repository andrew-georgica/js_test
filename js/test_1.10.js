
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


function createDrinkOrder(passenger) {
  var orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function() {
      console.log("Would you like a cocktail or wine?");
    };
  } else {
    orderFunction = function() {
      console.log("Your choice is cola or water.");
    };
  }

  return orderFunction;

}

function serveCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger);

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
  { name: "John Funcall", paid: true, ticket: "coach" }
];

// Function call

servePassengers(passengers);
