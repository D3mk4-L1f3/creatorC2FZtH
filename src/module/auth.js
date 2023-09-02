// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, set, ref, update } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB5nzvMgM0XL_NZBrLuY523Oaf2cI4vwxQ',
  authDomain: 'drinkify-project.firebaseapp.com',
  projectId: 'drinkify-project',
  storageBucket: 'drinkify-project.appspot.com',
  messagingSenderId: '235372226042',
  appId: '1:235372226042:web:7b36d78737638624c27043',
  measurementId: 'G-Q6TRYCCQ3S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);
const submitBtnReg = document.querySelector('#reg-submit');
const submitBtnLogin = document.querySelector('#login-submit');

// Detect auth state
onAuthStateChanged(auth, user => {
  if (user != null) {
    console.log('Registered!');
  } else {
    console.log('no user!');
  }
});

submitBtnReg.addEventListener('click', evt => {
  evt.preventDefault();
  let email = document.querySelector('#reg-email').value;
  let password = document.querySelector('#reg-pass').value;
  let username = document.querySelector('#reg-username').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email,
        fav: {
          name: 'Cocktail',
          description: 'i dont know',
        },
      });
      alert('user created');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
});

submitBtnLogin.addEventListener('click', evt => {
  evt.preventDefault();

  let email = document.querySelector('#login-email').value;
  let password = document.querySelector('#login-pass').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      const dt = new Date();

      update(ref(database, 'users/' + user.uid), {
        last_login: dt,
      });

      alert('Logged in!');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('no valid date!!!');
    });
});

onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

logout.addEventListener('click', evt => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('user logged out');
    })
    .catch(error => {
      // An error happened.
      console.log('Error in log out');
    });
});
