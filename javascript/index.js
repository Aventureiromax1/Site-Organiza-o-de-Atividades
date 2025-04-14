document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("input");
  const theme = window.localStorage.getItem("theme");

  // Aplica o tema salvo no localStorage ao carregar a página
  if (theme === "dark") {
    document.body.classList.add("dark");
    if (themeToggle) themeToggle.checked = true; // Define a checkbox como marcada
  } else {
    if (themeToggle) themeToggle.checked = false; // Define a checkbox como desmarcada
  }

  // Escuta o evento de mudança na checkbox
  if (themeToggle) {
    themeToggle.addEventListener("change", () => {
      document.body.classList.toggle("dark");
      if (document.body.classList.contains("dark")) {
        window.localStorage.setItem("theme", "dark");
      } else {
        window.localStorage.setItem("theme", "light");
      }
    });
  }
});