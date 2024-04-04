import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
   const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};