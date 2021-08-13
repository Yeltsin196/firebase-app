
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBGU5Vjqpfr59WS8Xoh9ZaEsSiSSaweRIc",
    authDomain: "fir-app-31a91.firebaseapp.com",
    projectId: "fir-app-31a91",
    storageBucket: "fir-app-31a91.appspot.com",
    messagingSenderId: "709160116984",
    appId: "1:709160116984:web:530e11d0649e369c78510d",
    databaseURL: "https://FireBaseApp.firebaseio.com",
    measurementId: "G-V7TG55K95B"
};

firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
var database = firebase.firestore();
var docRef = database.collection('message').doc('vE3lv5B2GZk80MPqJSfp')
docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

const auth = firebase.auth();

/* auth.createUserWithEmailAndPassword('yel.ruben@gmail.com', '25496541')
    .then((userCredential) => {
        console.log(userCredential);
    });
 */



$("#logout").on("click", (e) => {
    e.preventDefault();
    auth.signOut().then((result) => {
        console.log(result);
        console.log("signup out");
    });
});

const googleButton = document.getElementById("#googleLogin");

$("#googleLogin").on("click", (e) => {
    e.preventDefault();


    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
        console.log(result);
        console.log("google sign in");
    })
        .catch(err => {
            console.log(err);
        })
});