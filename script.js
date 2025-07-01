// JavaScript para Rolagem Suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// JavaScript para Validação do Formulário de Contato
const contactForm = document.getElementById("contactForm");
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
  e.preventDefault(); // Previne o envio padrão do formulário

  let isValid = true;

  // Limpa mensagens de erro e sucesso anteriores
  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";
  successMessage.style.display = "none";

  // Validação do Nome
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Por favor, digite seu nome.";
    isValid = false;
  }

  // Validação do Email
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Por favor, digite seu email.";
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = "Por favor, digite um email válido.";
    isValid = false;
  }

  // Validação do Assunto
  if (subjectInput.value.trim() === "") {
    subjectError.textContent = "Por favor, digite o assunto.";
    isValid = false;
  }

  // Validação da Mensagem
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Por favor, digite sua mensagem.";
    isValid = false;
  }

  if (isValid) {
    // Se todos os campos são válidos, você pode enviar o formulário
    // Aqui, vamos apenas exibir uma mensagem de sucesso.
    // Em um site real, você enviaria os dados para um servidor (usando fetch() ou XMLHttpRequest)
    successMessage.textContent =
      "Mensagem enviada com sucesso! Entraremos em contato em breve.";
    successMessage.style.display = "block";
    contactForm.reset(); // Limpa o formulário
  }
});

function isValidEmail(email) {
  // Regex simples para validação de email
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// JavaScript para Menu Responsivo (Hamburger Menu)
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active"); // Adiciona classe para animar o ícone
});

// Fechar o menu quando um link é clicado (em mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});
