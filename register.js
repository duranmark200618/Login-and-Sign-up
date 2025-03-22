import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAhn_Bp5GDsty_Hya-67ztY4X-M0Ddjv3A",
    authDomain: "login-and-sign-up-2807e.firebaseapp.com",
    projectId: "login-and-sign-up-2807e",
    storageBucket: "login-and-sign-up-2807e.appspot.com",
    messagingSenderId: "720185234298",
    appId: "1:720185234298:web:af7438e43d41c96b157cc3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.querySelector("#signup-form input[type='email']").value;
    let password = document.querySelector("#signup-form input[type='password']").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Account created successfully!");
        window.location.href = "index.html"; 
      })
      .catch((error) => {
        alert(error.message);
      });
});