

$(document).ready(function () {
    read_bd();
});
function read_bd() {
    console.log("readbd");
    // Get a reference to the database service
    const dbRef = firebase.database().ref('refrigerador');

    dbRef.get().then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

}

/* $("#app").css({ "display": "none" }); */

const auth = firebase.auth();
$("#signInWithMail").on("click", function () {
    var email = $("#mail").val();
    var password = $("#password").val();

    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
        console.log(userCredential);
    });
})





$("#logout").on("click", (e) => {
    e.preventDefault();
    auth.signOut().then((result) => {

        console.log("signup out");
        $("#app").css({ "display": "none" });
        $("#root").css({ "display": "block" });
    });
});

const googleButton = document.getElementById("#googleLogin");

$("#googleLogin").on("click", (e) => {
    e.preventDefault();


    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
        /*   console.log(result);
          console.log("google sign in"); */
        $("#root").css({ "display": "none" });
        $("#app").css({ "display": "block" });
        read_bd();
    })
        .catch(err => {
            console.log(err);
        })
});

