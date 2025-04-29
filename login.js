
// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBJ4RKUB-eL2o7d3ZtaqqB0Dk-U8Py7Ahw",
    authDomain: "todolistweb-2da18.firebaseapp.com",
    projectId: "todolistweb-2da18",
    storageBucket: "todolistweb-2da18.firebasestorage.app",
    messagingSenderId: "717453939665",
    appId: "1:717453939665:web:603e13545707ee97c786f0",
    measurementId: "G-8XTWKZJQ7T"
};

// Firebase initialize
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Giriş formu işlemi
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun default submit işlemini engeller
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Firebase Authentication ile kullanıcı girişi
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Giriş başarılı:', user);
            
            // Giriş başarılı olduktan sonra kullanıcıyı yönlendir
            window.location.href = "todolist.html"; // Kendi todo list sayfanıza yönlendirin
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert("Kayıt Bulunamadı Lütfen Kayıt Olunuz!"); // Hata mesajını göster
        });
});

// Şifreyi gizleyip göstermek için toggle işlevi
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'visibility_off' : 'visibility';
});

