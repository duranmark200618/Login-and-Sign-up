document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");
  const signupLink = document.getElementById("signup-link");
  const loginLink = document.getElementById("login-link");

  
  signupLink.addEventListener("click", () => {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
  });

  loginLink.addEventListener("click", () => {
      signupForm.style.display = "none";
      loginForm.style.display = "block";
  });

  
  signupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      
      const username = document.getElementById("signup-username").value;
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
      const confirmPassword = document.getElementById("signup-confirm-password").value;

      if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
      }

      
      const user = { username, email, password };
      localStorage.setItem("user", JSON.stringify(user));

      alert("Signup successful! You can now log in.");
      signupForm.reset();
      signupForm.style.display = "none";
      loginForm.style.display = "block";
  });

  loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;

      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (!savedUser || savedUser.username !== username || savedUser.password !== password) {
          alert("Invalid username or password!");
          return;
      }

      alert("Login successful!")

      window.location.href = "https://duranmark200618.github.io/MarkProfile/";
  });
});