
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
