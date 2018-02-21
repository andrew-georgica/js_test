
/*
function handler() {
  alert("Yeah, that page loaded");
}

window.onload = handler;
*/

/*
window.onload = init;

var cookies = {
  instructions: "Preheat oven to 350...",
  bake: function(time) {
          console.log("Baking the cookies.");
          setTimeout(done, time);
        }
};

function init() {
  var button = document.getElementById("bake");
  button.onclick = handleButton;
}

function handleButton() {
  console.log("Time to bake the cookies.");
  cookies.bake(2500);
}

function done() {

  alert("Cookies are ready, take them out to cool.");
  console.log("Cooling the cookies.");

  var cool = function() {
    alert("Cookies are cool, time to eat!");
  };

  setTimeout(cool, 1000);
}
*/


/*
function vaccine(dosage) {
  if (dosage > 0) {
    var b = inject(dosage);
  } else {
    var b = "There is health patient";
  }
  return b;
}

function inject(dos_argumentt) {
  var a = "inject " + dos_argumentt + " of medicine";
  return a;
}

function administer(patient, vaccine, time) {
  console.log(patient + " need " + vaccine(2) + " at " + time );
}

var patient = "John Smith";
var time = "6PM";

administer(patient, vaccine, time);
*/

/*
var migrating = true;

var fly = function(num) {
  var sound = "Flying!";
  function wingFlapper() {
    console.log(sound);
  }
  for (var i = 0; i < num; i++) {
    wingFlapper();
  };
}

function quack(num) {
  var sound = "Quack!";

  function quacker() {
    console.log(sound);
  }

  for (var i = 0; i < num; i++) {
    quacker();
  };
}

if (migrating) {
  quack(4);
  fly(4);
}
*/

/*
var justAVar = "Oh, don't you worry about it, I'm GLOBAL";

function whereAreYou() {
  var justAVar = "Just an every day LOCAL";

  function inner() {
    return justAVar;
  }

  return inner;
}

var innerFunction = whereAreYou();
var result = innerFunction();
console.log(result);
*/

/*
function makeCounter() {
  var count = 0;

  function counter() {
    count = count + 1;
    return count;
  }

  return counter;
}

var doCount = makeCounter();

console.log(doCount());
console.log(doCount());
console.log(doCount());
*/

/*
function makePassword(password) {

  return function guess(passwordGuess) {
    return (passwordGuess === password);
  }

};

var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));
*/

function multN(n) {
  return function multiplate (num) {
    return num * n;
  }
}

var a = multN(3);
console.log(a(5));
console.log(a(10));
