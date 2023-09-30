import { auth } from './config.js';
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const handleAnonymous = () => {
    signInAnonymously(auth)
        .then(() => {
            alert('ban dang o che do an danh')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
        });
}


