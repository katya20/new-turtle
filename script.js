var counter = 1;
function polygon(distance, n) {
  if (counter < n*2) {
    counter++
    goForward(distance);
    turnN(n);
    goForward(distance);
    turnN(n);
    goForward(distance);
    turnN(n);
    goForward(distance);
    turnN(n);
  }
}

polygon(50,4);
//
//n = 4;
//
//goForward(100);
//turnN(n);
//goForward(100);
//turnN(n);
//goForward(100);
//turnN(n);