
function polygon(distance, n) {
  for (i = 0; i < n; i++) {
    goForward(distance);
    turnN(n);
  }
}

polygon(100,5);
//
//n = 4;
//
//goForward(100);
//turnN(n);
//goForward(100);
//turnN(n);
//goForward(100);
//turnN(n);