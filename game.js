// Cube properties
let x = 225, y = 225;
const size = 50, speed = 5;

// Get the canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Draw the cube
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#66f";
  ctx.fillRect(x, y, size, size);
}

// Handle arrow key movement
document.addEventListener('keydown', function(e) {
  switch(e.key) {
    case "ArrowUp":    y = Math.max(y - speed, 0); break;
    case "ArrowDown":  y = Math.min(y + speed, canvas.height - size); break;
    case "ArrowLeft":  x = Math.max(x - speed, 0); break;
    case "ArrowRight": x = Math.min(x + speed, canvas.width - size); break;
  }
  draw();
});

// Initial draw
draw();