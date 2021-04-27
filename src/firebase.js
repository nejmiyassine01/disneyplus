const firebaseConfig = {
	apiKey: "AIzaSyAq2TL1owCWdxM8DBmoZ-FPkPM7e3iRUR4",
	authDomain: "disney-clone-e8b0b.firebaseapp.com",
	projectId: "disney-clone-e8b0b",
	storageBucket: "disney-clone-e8b0b.appspot.com",
	messagingSenderId: "17160315886",
	appId: "1:17160315886:web:58c9ad2e002c8af123e4ff",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firestore.storage();

export { auth, provider, storage };
export default db;
