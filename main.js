// Olympic Rings Start Code

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 440;
cnv.height = 250;

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

function draw() {
  // Background
  ctx.fillStyle = "#eee";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Circle Line Width
  ctx.lineWidth = 8;

  // Blue Ring - Center: (100, 100) Radius: 50
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, 2 * Math.PI);
  ctx.stroke();

  // Yellow Ring - Center: (160, 150) Radius: 50
  ctx.strokeStyle = "yellow";
  ctx.beginPath();
  ctx.arc(160, 150, 50, 0, 2 * Math.PI);
  ctx.stroke();

  // Black Ring - Center: (220, 100) Radius: 50
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(220, 100, 50, 0, 2 * Math.PI);
  ctx.stroke();

  // Blue Ring - Center: (280, 150) Radius: 50
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.arc(280, 150, 50, 0, 2 * Math.PI);
  ctx.stroke();

  // Red Ring - Center: (340, 100) Radius: 50
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.arc(340, 100, 50, 0, 2 * Math.PI);
  ctx.stroke();
}
