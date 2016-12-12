


function polygon(distance, n) {
  for (i = 0; i < n; i++) {
    goForward(distance);
    turnN(n);
    
  }
}

x = -200
y = 600

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

function star(distance) {
  for (i = 0; i < 5; i++){
    goForward(distance);
    starAngle(distance);
  }
}

function manyStars(distance, size) {
  while (size > 0) {
    size = size-20
    position = {x: x, y: y};
    star(size);
    x = x + 25;
    y = y - 20;
  }
}


//manyStars(100, 500)
$(".turtle-cage").click( function(){
$(".turtle-cage").keyup( function () {
    console.log('go right');
    turnRight();
    goForward(100);
})}
  )







