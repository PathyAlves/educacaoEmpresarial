// =============== Rolagem Suave ===============
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// =============== Validação do Formulário de Contato ===============
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Limpa mensagens anteriores
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";
    successMessage.style.display = "none";

    if (nameInput.value.trim() === "") {
      nameError.textContent = "Por favor, digite seu nome.";
      isValid = false;
    }

    if (emailInput.value.trim() === "") {
      emailError.textContent = "Por favor, digite seu email.";
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailError.textContent = "Por favor, digite um email válido.";
      isValid = false;
    }

    if (subjectInput.value.trim() === "") {
      subjectError.textContent = "Por favor, digite o assunto.";
      isValid = false;
    }

    if (messageInput.value.trim() === "") {
      messageError.textContent = "Por favor, digite sua mensagem.";
      isValid = false;
    }

    if (isValid) {
      successMessage.textContent =
        "Mensagem enviada com sucesso! Entraremos em contato em breve.";
      successMessage.style.display = "block";
      contactForm.reset();
    }
  });

  function isValidEmail(email) {
    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return re.test(email);
  }
}

// =============== Menu Hamburguer Responsivo ===============
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });
}
