


function polygon(distance, n) {
  for (i = 0; i < n; i++) {
    goForward(distance);
    turnN(n);
    
  }
}



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
function move (){
  turtle.animate({
  left: position.x, 
  bottom: position.y,
 },{
 complete : function() {
  insertLine(origPosition, origHeading, distance)
}, duration:1
})
}

$("body").keydown(function(e) {
  console.log("hi");
  if (e.keyCode == 39) {
    console.log('go right');
    x = x + 50;
    position = {x: x, y: y};
    turtle.animate({
      left: position.x, 
      bottom: position.y,
    },{
      complete : function() {
        insertLine(origPosition, origHeading, distance)
      }, duration:1
    })
    
}
  if (e.keyCode == 37) {
    console.log('go left');
    position = {x: x - 50, y: y};
  }
  if (e.keyCode == 38) {
    console.log('go up');
    position = {x: x, y: y};
    y = y + 50;
  }
  if (e.keyCode == 40) {
    console.log('go down');
    position = {x: x, y: y - 50};
  }
})








