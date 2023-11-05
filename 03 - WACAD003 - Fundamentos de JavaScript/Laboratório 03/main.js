// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

function Triangle(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

Triangle.prototype.draw = function () {
  const x1 = this.x;
  const y1 = this.y - (Math.sqrt(3) / 2) * this.size;
  const x2 = this.x - this.size / 2;
  const y2 = this.y + (Math.sqrt(3) / 2) * (this.size/ 2);
  const x3 = this.x + this.size / 2;
  const y3 = this.y + (Math.sqrt(3) / 2) * (this.size / 2);

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.fillStyle = this.color;
  ctx.closePath();
  ctx.fill();
};

Triangle.prototype.update = function () {
  if (this.x + this.size >= width) {
    this.velX = -this.velX;
  }

  if (this.x - this.size <= 0) {
    this.velX = -this.velX;
  }

  if (this.y + this.size >= height) {
    this.velY = -this.velY;
  }

  if (this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};

  Triangle.prototype.collisionDetect = function () {
    for (let j = 0; j < triangles.length; j++) {
      if (!(this === triangles[j])) {
        const dx = this.x - triangles[j].x;
        const dy = this.y - triangles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + triangles[j].size) {
          triangles[j].color = this.color =
            `rgba(0, 162, 232, ${random(0.4, 1)})`;
        }

      }
    }
};

let triangles = [];

while (triangles.length < 25) {
  let size = random(10, 30);
  let triangle = new Triangle(
    // triangle position always drawn at least one triangle width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    `rgba(0, 162, 232, ${random(0.4, 1)})`,
    size,
  );

  triangles.push(triangle);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < triangles.length; i++) {
    triangles[i].draw();
    triangles[i].update();
    triangles[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();
