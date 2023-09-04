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
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
  login_hint: 'user@example.com',
});
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);
const submitBtnReg = document.querySelector('#reg-submit');
const submitBtnLogin = document.querySelector('#login-submit');
const modal = document.querySelector('.auth-backdrop');
const logout = document.querySelector('.auth-logout');
const openModal = document.querySelector('#login-modal-btn');
const closeModal = document.querySelector('#login-modal-close');
const signinGoogle = document.querySelector('#google');
let cocktailList;
document.addEventListener('load', function () {
  cocktailList = document.querySelector('.cocktail-list');
  console.log(cocktailList);
});

function getData(dataName) {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const userId = auth.currentUser.uid;
    const dataRef = ref(db, 'users/' + userId + '/' + dataName);

    onValue(
      dataRef,
      snapshot => {
        const data = snapshot.val();
        resolve(data);
      },
      error => {
        reject(error);
      }
    );
  });
}

// Detect auth state
onAuthStateChanged(auth, user => {
  if (user != null) {
    Notiflix.Notify.success('Welcome, (user)');
    modal.classList.add('is-hidden');
  } else {
    modal.classList.remove('is-hidden');
    Notiflix.Notify.warning('Please log in your account!');
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
      set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email,
        favorites: [' '],
      });
      Notiflix.Notify.success('You created your account,', username);
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
      console.error('no valid date!!!');
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
      console.error('Error in log out');
    });
});

openModal.addEventListener('click', () => {
  modal.classList.remove('is-hidden');
});

closeModal.addEventListener('click', () => {
  modal.classList.add('is-hidden');
});

signinGoogle.addEventListener('click', evt => {
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
if (cocktailList) {
  cocktailList.addEventListener('click', async evt => {
    if (
      evt.target.classList.contains('js-btn-favorite') == false &&
      evt.target.classList.contains('card-icon') == false
    ) {
      return;
    }
    try {
      const favData = await getData('favorites');
      const response = await axios.get(
        `https://drinkify-backend.p.goit.global/API/V1/cocktails/lookup/?id=${evt.target.getAttribute(
          'data-id'
        )}`
      );
      let drink = favData;
      drink.push({
        name: response.data[0].drink,
        description: response.data[0].description,
        image: response.data[0].drinkThumb,
      });
      const db = getDatabase();
      const userId = auth.currentUser.uid;
      set(ref(db, 'users/' + userId), {
        favorites: drink,
      })
        .then(() => {
          // Data saved successfully!
          console.log('Updated data');
        })
        .catch(error => {
          console.error('Problems with updating data! Line: 213');
          // The write failed...
        });

      console.log(favData);
    } catch (error) {
      console.error(error);
    }
  });
}

export async function createFavorites() {
  if (!cocktailList) {
    console.error('cocktailList not found!!!');
    return;
  } else {
    console.log(cocktailList);
  }
  const favData = await getData('favorites');
  data = favData;
  if (data[0] == ' ') {
    data.shift();
  }
  const cocktailHTML = data
    .map(({ name, description, image }) => {
      return `<li class="cocktail-item dynamic-box">
      <img
        class="card-image img "
        src="${image}"
        alt="${name}"
        loading="lazy"
      />
      <div class="text-box dynamic-element">
        <h2 class="cocktail-name dynamic-element">${name}</h2>
        <p class="cocktail-descr dynamic-element">${description}</p>
        <div class="btn-box dynamic-element">
          <button type="button" class="card-btn btn js-btn-learn-more dynamic-element">
            learn more
          </button>
          <button type="button" class="btn-favorite btn js-btn-favorite dynamic-element">
            <svg class="card-icon">
              <use></use>;
            </svg>
          </button>
        </div>
      </div>
    </li>`;
    })
    .join();
}
