import { auth } from './config.js';
import { signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const logOut = document.getElementById('logout-btn');

const handleLogOut = ()=>{
    signOut(auth).then(() => {
        window.location = 'login.html';
      }).catch((error) => {

      });
}
logOut.addEventListener('click', handleLogOut);


const anon = document.getElementById('anonymous-btn')
const handleAnonymous = () => {
    signInAnonymously(auth).then(() => {
        console.log(1)
          window.location = 'anonymous.html'
        })
        .catch((error) => {

        });
}

anon.addEventListener('click',handleAnonymous);