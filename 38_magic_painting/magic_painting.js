const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
canvas.width = 800;
canvas.height = 400;
ctx.strokeStyle = '#55dab2';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;
ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true; //start to grow up

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  //update the position from e.setOff, it's equal to below codes instead of one line
  //lastX = e.offsetX;
  //lastY = e.offsetY;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  //mother-effing hsl
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

  if (ctx.lineWidth >= 20 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
}

function redraw() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  draw();
}

function eraserDraw() {
  ctx.globalCompositeOperation = "destination-out";
  ctx.arc(lastX, lastY, 10, 0, Math.PI*2, false);
  ctx.fill();
}


canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  //update the position when first drawing
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

const clear = document.querySelector('#clear');
clear.addEventListener('click', redraw);

const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', eraserDraw);

/*
const pen = document.querySelector('#pen');
pen.addEventListener('click', function(e) {
  draw(e);
  isDrawing = true;
  //update the position when first drawing
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


http://stackoverflow.com/questions/25907163/html5-canvas-eraser-tool-without-overdraw-white-color
https://codepen.io/WangWeiqiang/pen/Cadyu
*/
