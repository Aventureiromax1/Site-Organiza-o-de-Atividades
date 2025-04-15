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

document.getElementById("saveButton").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  saveUserData(name, email, password);
});

function saveUserData(name, email, password) {
  if (
    typeof name === "string" && name.trim() !== "" &&
    typeof email === "string" && email.trim() !== "" &&
    typeof password === "string" && password.trim() !== ""
  ) {
    if (typeof window.localStorage !== "undefined") {
      try {
        const userData = { name, email, password };
        window.localStorage.setItem("userData", JSON.stringify(userData));
      } catch (error) {
        console.error("Failed to save user data:", error);
        if (error.message.includes("name")) {
          document.getElementById("nameInput").value = "";
        } else if (error.message.includes("email")) {
          document.getElementById("emailInput").value = "";
        } else if (error.message.includes("password")) {
          document.getElementById("passwordInput").value = "";
        }
        alert("An error occurred while saving user data. Please try again.");
      }
    } else {
      console.error("LocalStorage is not available.");
      alert("LocalStorage is not supported by your browser.");
    }
  }
}