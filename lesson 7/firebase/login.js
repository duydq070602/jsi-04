import { auth } from './config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { signInWithPopup, FacebookAuthProvider} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import {signInWithRedirect} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
const emailElm = document.getElementById('email');
const passwordElm = document.getElementById('password')
const loginBtn = document.getElementById('login-btn')


const handleLogin = () => {
    const email = emailElm.value;
    const password = passwordElm.value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('dang nhap thanh cong')
            window.location = 'index.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
        });
}
loginBtn.addEventListener('click', handleLogin);


const provider = new FacebookAuthProvider();
const facebook = document.getElementById('fb-login-btn');
handleLoginFacebook=()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });


}
facebook.addEventListener('click', handleLoginFacebook)