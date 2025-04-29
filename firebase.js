// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ4RKUB-eL2o7d3ZtaqqB0Dk-U8Py7Ahw",
  authDomain: "todolistweb-2da18.firebaseapp.com",
  projectId: "todolistweb-2da18",
  storageBucket: "todolistweb-2da18.firebasestorage.app",
  messagingSenderId: "717453939665",
  appId: "1:717453939665:web:603e13545707ee97c786f0",
  measurementId: "G-8XTWKZJQ7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Kayıt işlemi
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log('Kullanıcı başarıyla kaydedildi:', user);

      // Kullanıcı bilgilerini Firestore'a kaydetme
      try {
        await setDoc(doc(db, "users", user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          uid: user.uid
        });
        console.log("Kullanıcı bilgileri Firestore'a kaydedildi.");
        // Kaydolduktan sonra yönlendirme yapılabilir
        window.location.href = "todolist.html"; // Örneğin dashboard.html sayfasına yönlendirme
      } catch (error) {
        console.error("Firestore'a veri kaydedilirken hata:", error);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      alert("Hata: " + errorMessage);
    });
});



