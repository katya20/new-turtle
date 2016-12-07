var x = 1;
function polygon(distance, n) {
  if (x < n*2) {
x++;
goForward(distance);
turnN(n);
  }
}

polygon(100,4);