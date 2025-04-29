document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun default submit işlemini engeller
    
    // Kullanıcının girdiği bilgileri al
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Firebase Authentication ile kullanıcı kaydını yap
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Kullanıcı başarıyla kaydedildi
        const user = userCredential.user;
  
        // Kullanıcı bilgilerini Firestore'a kaydet
        await setDoc(doc(db, "users", user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          uid: user.uid
        });
  
        console.log('Kullanıcı kaydedildi:', user);
        
        // Başarıyla kaydedildikten sonra başka bir sayfaya yönlendir
        window.location.href = "dashboard.html"; 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Bir hata oluştu: " + errorMessage); // Hata mesajını göster
      });
  });
  