
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

star (100);


