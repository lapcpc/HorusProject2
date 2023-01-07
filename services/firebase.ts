import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAnVVrMyqKj-5Tqat43w3CoIO_dL_KsH8k",
    authDomain: "horus-9d675.firebaseapp.com",
    projectId: "horus-9d675",
    storageBucket: "horus-9d675.appspot.com",
    messagingSenderId: "594710133789",
    appId: "1:594710133789:web:562ce6c670b1a557275af4"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()