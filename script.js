x = 300
y = 0
var position = {x: x, y: y};

function polygon(distance, n) {
  for (i = 0; i < n; i++) {
    goForward(distance);
    turnN(n);
  }
}
//
//polygon(12,200);


function Hell (size, ) {
  
var position = {x: x, y: y};

polygon(10,200);

var position = {x: x, y: y+105};

polygon(7,200);

var position = {x: x, y: y + 210};

polygon(4,200);

var position = {x: x, y: y + 315};

polygon(1,200);
//
//var position = {x: x, y: y + 140};
//
//polygon(6,200);
//}

//var position = {x: x, y: y + 350};
//
//polygon(0,200);







function star(distance) {
  for (i = 0; i < 5; i++){
    goForward(distance);
    starAngle(distance);
  }
}

//manyStars(100, 200, 200)
//
//function manyStars(distance) {
//  for (size = distance; size > 0; size = size - 20) {
//    star(size);
//    var x = x + 25;
//    var y = y - 20;
//    var position = {x: x, y: y};
//  }
//}
star (100);

var position = {x: 225, y: 180};

star(80);

var position = {x: 250, y: 160};

star(60);

var position = {x: 275, y: 140};

star(40);

var position = {x: 300, y: 120};

star(20);




