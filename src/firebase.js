import firebase from 'firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAiK8ggTa2D-MXtu5Vs7sXG8qWMEA-8YCg',
  authDomain: 'facebook-clone-nowfel2k.firebaseapp.com',
  databaseURL: 'https://facebook-clone-nowfel2k.firebaseio.com',
  projectId: 'facebook-clone-nowfel2k',
  storageBucket: 'facebook-clone-nowfel2k.appspot.com',
  messagingSenderId: '316024780523',
  appId: '1:316024780523:web:bd95108a1fcfdb07e030ae',
  measurementId: 'G-86LNBDFCMF'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
