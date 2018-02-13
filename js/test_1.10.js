
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
