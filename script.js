window.onload = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Header animation
  gsap.from(".name", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power3.out"
  });

  gsap.from(".tagline", {
    duration: 1.2,
    delay: 0.3,
    opacity: 0,
    y: 40,
    ease: "power2.out"
  });

  gsap.from(".navbar a", {
    duration: 0.8,
    opacity: 0,
    y: -20,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });

  gsap.utils.toArray(".animate-section").forEach((section) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      duration: 1.2,
      y: 0,
      opacity: 1,
      ease: "power3.out"
    });
  });

  // 3D card hover
  const card = document.querySelector(".card3d");
  card.addEventListener("mousemove", (e) => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = card;
    const rotateY = ((offsetX / offsetWidth) - 0.5) * 20;
    const rotateX = ((offsetY / offsetHeight) - 0.5) * -20;
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
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
