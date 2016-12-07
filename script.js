var x = 1;
function polygon(distance, n) {
  if (x < n*2) {
    x++;
    goForward(distance);
    turnN(n);
    window.setTimeout(polygon, 50)
  }
}

polygon(100,4);