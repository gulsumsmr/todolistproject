document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  const signupForm = document.getElementById("signupForm");

  // Şifre göster/gizle
  togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "visibility_off" : "visibility";
  });

  // Form gönderimini engelle ve yönlendir
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Sayfa yenilenmesini engelle
    window.location.href = "login.html"; // Yönlendirme
  });
});
