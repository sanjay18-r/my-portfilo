const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numParticles = 150;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2 + 1;
    this.dx = Math.random() - 0.5;
    this.dy = Math.random() - 0.5;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    // Bounce off edges
    if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = "#00bcd4";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  for (let i = 0; i < numParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particlesArray) {
    p.update();
    p.draw();
  }
  requestAnimationFrame(animate);
}

initParticles();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
