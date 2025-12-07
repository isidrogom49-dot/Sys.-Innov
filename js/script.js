// ------------------------------
// PARTICULAS EN EL HERO
// ------------------------------
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

// Crear partículas
const particles = [];
for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

// Animación de partículas
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#34d399";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animate);
}

animate();

// ------------------------------
// MENU RESPONSIVO FUNCIONAL
// ------------------------------
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("show");
});

// ------------------------------
// CARRUSEL DE FRASES EN HERO
// ------------------------------
const phrases = [
  "Bienvenido a Nuestro Sitio Web!",
  "Nuestro objetivo es hacer funcional aquel cosa que no es fucional",
  "Explora nuestros proyectos",
   "Bienvenido a Nuestro Sitio Web!",
  "Innovación y Tecnología",
  "Transformando ideas en soluciones"
];

const heroText = document.getElementById("heroText");
let index = 0;

function showPhrase() {
  // Ocultar texto antes de cambiar
  heroText.style.opacity = 0;
  heroText.style.transform = "translateY(20px)";
  
  setTimeout(() => {
    heroText.textContent = phrases[index];
    heroText.style.transition = "all 0.6s ease";
    heroText.style.opacity = 1;
    heroText.style.transform = "translateY(0)";
    
    index = (index + 1) % phrases.length;
  }, 600);
}

// Cambiar frase cada 3 segundos
setInterval(showPhrase, 3000);

// Inicializar con la primera frase visible
heroText.style.opacity = 1;
heroText.style.transform = "translateY(0)";
