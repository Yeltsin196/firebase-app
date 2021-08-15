var time_default = 3000;
var time_interval_TThermok = 6000;
var time_interval_hour = 300000;
var time_interval_minute = 30000;
var time_interval_day = 30000;
var temperatura;
var temperatura_hora = [];
var temperatura_minuto = [];
var temperatura_dia = [];
var fecha_hoy = new Date();
$(document).ready(function () {

    read_temp_TThermok();
    read_temp_Hora();
    read_temp_Minutes();
    read_temp_Days();
    if (localStorage.getItem('token') != null) {
        $("#root").css({ "display": "none" });
        $("#app").css({ "display": "block" });
        $("#logoutli").css({ "display": "flex" });
    }


});
setInterval(() => {
    fecha_hoy = new Date();
}, 1000);
setInterval(() => {
    read_temp_TThermok();
}, time_interval_TThermok);
setInterval(() => {
    read_temp_Hora();
}, time_interval_hour);

function read_temp_TThermok() {

    // Get a reference to the database service


    const dbRef = firebase.database().ref('Nodemcu/TThermok').limitToLast(1);


    dbRef.on('value', function (snapshot) {
        temperatura = snapshot.val();
        var temp_aux;

        for (var index in temperatura) {
            temp_aux = temperatura[index];
            temperatura = temp_aux;
            /*     console.log(temperatura); */
        }

    });


}

function read_temp_Hora() {

    // Get a reference to the database service

    temperatura_hora = [];
    var hora;
    var horaRef = firebase.database().ref('Nodemcu/Hora').limitToLast(10);


    horaRef.on('value', function (snapshot) {
        var horaAux = snapshot.val();

        for (var index in horaAux) {
            hora = horaAux[index];
            temperatura_hora.push(parseFloat(hora));

        }
        /*   console.log(temperatura_hora); */

    });



}

function read_temp_Minutes() {

    // Get a reference to the database service

    temperatura_minuto = [];
    var minuto;
    var minutoRef = firebase.database().ref('Nodemcu/Minutos').limitToLast(10);


    minutoRef.on('value', function (snapshot) {
        var minutoAux = snapshot.val();

        for (var index in minutoAux) {
            minuto = minutoAux[index];
            temperatura_minuto.push(parseFloat(minuto));

        }
        /*   console.log(temperatura_hora); */

    });



}
function read_temp_Days() {
    // Get a reference to the database service

    temperatura_dia = [];
    var dia;
    var diaRef = firebase.database().ref('Nodemcu/Dia').limitToLast(10);


    diaRef.on('value', function (snapshot) {
        var diaAux = snapshot.val();

        for (var index in diaAux) {
            dia = diaAux[index];
            temperatura_dia.push(parseFloat(dia));

        }

        /*   console.log(temperatura_dia); */
    });
}
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
        localStorage.clear();
        console.log("signup out");
        $("#app").css({ "display": "none" });
        $("#root").css({ "display": "block" });
        $("#logoutli").css({ "display": "none" });
    });
});

const googleButton = document.getElementById("#googleLogin");

$("#googleLogin").on("click", (e) => {
    e.preventDefault();


    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
        console.log(result);
        /*    console.log("google sign in"); */
        localStorage.setItem('token', result.credential.idToken);
        $("#root").css({ "display": "none" });
        $("#app").css({ "display": "block" });
        $("#logoutli").css({ "display": "flex" });
        read_temp_TThermok();
    })
        .catch(err => {
            console.log(err);
        })
});

