window.onload = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Typing Effect
  const texts = ["Sanjay R", "an AI Engineer", "a Creative Coder", "a Futurist"];
  const typeEl = document.querySelector(".typing-text");
  let i = 0, j = 0, current = "", isDeleting = false;

  function type() {
    current = texts[i];
    typeEl.textContent = current.substring(0, j);
    if (!isDeleting) {
      j++;
      if (j === current.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }
    } else {
      j--;
      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % texts.length;
      }
    }
    setTimeout(type, isDeleting ? 50 : 100);
  }
  type();

  // Scroll animations
  gsap.utils.toArray(".animate-section").forEach(section => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 0,
      opacity: 1,
      duration: 1.4,
      ease: "power4.out"
    });
  });

  // Mouse follower
  const follower = document.querySelector(".cursor-follower");
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };

  window.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  gsap.ticker.add(() => {
    pos.x += (mouse.x - pos.x) * 0.15;
    pos.y += (mouse.y - pos.y) * 0.15;
    follower.style.left = pos.x + "px";
    follower.style.top = pos.y + "px";
  });
};
