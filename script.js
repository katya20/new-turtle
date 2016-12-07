
function polygon(distance, n) {
  for (i = 0; i < n; i++) {
    goForward(distance);
    turnN(n);
  }
}

//polygon(100,10);

function star(distance) {
  for (i = 0; i < 5; i++){
    goForward(distance);
    starAngle(distance);
  }
}

function manyStars(distance) {
  for (size = distance; size > 0; size - 20) {
    star(size);
    var position = {x: 225, y: 180
  }
}
star (100);

var position = {x: 225, y: 180};

star(80);

var position = {x: 250, y: 160};

star(60);

var position = {x: 275, y: 140};

star(40);

var position = {x: 300, y: 120};

star(20);




