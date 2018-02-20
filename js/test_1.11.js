
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
