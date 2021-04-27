import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseApp = Firebase.initializeApp({
    apiKey: 'AIzaSyABihI8lqz8l8lnOBYfBjDUPBgSBGlWVcY',
    authDomain: 'netflix-clone-p21.firebaseapp.com',
    projectId: 'netflix-clone-p21',
    storageBucket: 'netflix-clone-p21.appspot.com',
    messagingSenderId: '1015647076396',
    appId: '1:1015647076396:web:576e63a9c74dcdcdb59189',
});

export { firebaseApp };