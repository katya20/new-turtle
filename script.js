


function polygon(distance, n) {
  for (i = 0; i < n; i++) {
    goForward(distance);
    turnN(n);
    
  }
}
//
//polygon(12,200);

x = 300
y = 0

function Hell (size, distance, accuracy) {
  while (size > 0) {
    y = y + (35*distance)
    console.log(y);
    size = size - distance
    position = {x: x, y: y};
    polygon(size,accuracy);
  }
}

//Hell(20, 1, 200);
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
function manyStars(distance, size) {
  while (size > 0) {
    size = size-20
    x = x + 25;
    y = y - 20;
    position = {x: x, y: y};
    star(size);
  }
}

manyStars(20, 100)
//star (100);
//
//var position = {x: 225, y: 180};
//
//star(80);
//
//var position = {x: 250, y: 160};
//
//star(60);
//
//var position = {x: 275, y: 140};
//
//star(40);
//
//var position = {x: 300, y: 120};
//
//star(20);




