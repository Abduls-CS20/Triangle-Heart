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
  ctx.fillStyle = "grey";

  ctx.beginPath();
  ctx.moveTo(0, 100);
  ctx.lineTo(100, 0);
  ctx.lineTo(100, 100);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(200, 100);
  ctx.lineTo(300, 0);
  ctx.lineTo(300, 100);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(100, 200);
  ctx.lineTo(200, 100);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(300, 100);
  ctx.lineTo(300, 200);
  ctx.lineTo(400, 200);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(100, 200);
  ctx.lineTo(100, 300);
  ctx.lineTo(200, 200);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(200, 300);
  ctx.lineTo(200, 400);
  ctx.lineTo(300, 300);
  ctx.fill();

  // Draw all PINK Triangles
  ctx.fillStyle = "pink";

  // Draw all RED Triangles
  ctx.fillStyle = "red";

  // Draw all YELLOW Triangles
  ctx.fillStyle = "yellow";
}
