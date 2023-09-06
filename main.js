// Triangle Heart Asgn Solution

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

function draw() {
  // Draw all GREY Triangles
  ctx.fillStyle = "grey"

  makeTriangle(0, 100, 100, 0, 100, 100)
  makeTriangle(200, 100, 300, 0, 300, 100)
  makeTriangle(100, 100, 100, 200, 200, 100)
  makeTriangle(300, 100, 300, 200, 400, 200)
  makeTriangle(100, 200, 100, 300, 200, 200)
  makeTriangle(200, 300, 200, 400, 300, 300)


  // Draw all PINK Triangles
  ctx.fillStyle = "pink";
  makeTriangle(100, 0, 100, 100, 200, 100)
  makeTriangle(0, 100, 0, 200, 100, 200)
  makeTriangle(300, 100, 400, 100, 400, 200)
  makeTriangle(100, 300, 200, 300, 200, 400)
  makeTriangle(200, 200, 300, 200, 300, 300)

  // Draw all RED Triangles
  ctx.fillStyle = "red";
  makeTriangle(0, 100, 100, 100, 100, 200)
  makeTriangle(300, 0, 400, 100, 300, 100)
  makeTriangle(200, 100, 300, 100, 200, 200)
  makeTriangle(200, 200, 200, 300, 100, 300)
  makeTriangle(300, 200, 300, 300, 400, 200)

  // Draw all YELLOW Triangles
  ctx.fillStyle = "yellow";
  makeTriangle(200, 200, 200, 100, 100, 200)
  makeTriangle(300, 100, 300, 200, 200, 200)
  makeTriangle(200, 200, 200, 300, 300, 300)
  makeTriangle(0, 200, 100, 200, 100, 300)
}

function makeTriangle(x1, y1, x2, y2, x3, y3){
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.fill();
}
