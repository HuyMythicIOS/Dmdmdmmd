// Slider update
document.getElementById("dpiRange").addEventListener("input", function() {
  document.getElementById("dpiValue").textContent = "DPI: " + this.value;
});

document.getElementById("fpsRange").addEventListener("input", function() {
  document.getElementById("fpsValue").textContent = "FPS: " + this.value;
});

// Toggle update
function setupToggle(id, statusId) {
  const checkbox = document.getElementById(id);
  const status = document.getElementById(statusId);
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      status.textContent = "BẬT";
      status.classList.add("on");
    } else {
      status.textContent = "TẮT";
      status.classList.remove("on");
    }
  });
}

setupToggle("aimHead", "aimHeadStatus");
setupToggle("aimLock", "aimLockStatus");
setupToggle("prime", "primeStatus");

// Particles effect
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
for (let i = 0; i < 80; i++) {
  particlesArray.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3,
    speedX: (Math.random() - 0.5) * 2,
    speedY: (Math.random() - 0.5) * 2
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    ctx.fillStyle = "rgba(212, 0, 255, 0.8)";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
