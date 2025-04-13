function toggleAside() {
    const aside = document.querySelector('aside');
    if (aside.style.display === 'none' || !aside.style.display) {
        aside.style.display = 'block';
        aside.style.maxWidth = '10rem';
        aside.style.backgroundColor = 'var(--bg-aside)';
    } else {
        aside.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const iframeSubject = document.querySelector(".iframeSubject");
    const main = iframeSubject.closest("main"); // pega o <main> mais próximo
  
    if (iframeSubject && main) {
      iframeSubject.addEventListener("mouseenter", () => {
        main.style.transition = "all 0.3s ease";
        main.style.transform = "scale(1.05)";
      });
  
      iframeSubject.addEventListener("mouseleave", () => {
        main.style.transform = "scale(1)";
      });
    }
  });
  