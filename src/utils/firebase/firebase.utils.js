import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBZQdz7y-2TkvVCo5Dnm37PSi-8ZquYF_I",
    authDomain: "crwn-clothing-db-6b738.firebaseapp.com",
    projectId: "crwn-clothing-db-6b738",
    storageBucket: "crwn-clothing-db-6b738.appspot.com",
    messagingSenderId: "950430121559",
    appId: "1:950430121559:web:84af8eb5aca56af26a2d12"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);