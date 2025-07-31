// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// Particle generator
const particleContainer = document.querySelector('.particles');
for (let i = 0; i < 50; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.width = `${Math.random() * 6 + 4}px`;
  particle.style.height = particle.style.width;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDelay = `${Math.random() * 15}s`;
  particleContainer.appendChild(particle);
}
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
document.getElementById('theme-toggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

