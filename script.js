
function polygon(distance, n) {
  for (i = 1; i < n*2; i++) {

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