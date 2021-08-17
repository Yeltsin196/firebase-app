var time_default = 3000;
var time_interval_TThermok = 6000;

var temperatura;
var temperatura_TThermok = [];
var temperatura_hora = [];
var temperatura_minuto = [];
var temperatura_dia = [];
var temperatura_month = [];
var temperatura_anio = [];
var fecha_hoy = new Date();
$(document).ready(function () {

    read_temp_TThermok();
    read_temp_TThermok_ext();
    read_temp_Hora();
    read_temp_Minutes();
    read_temp_Days();
    read_temp_Months();
    read_temp_Anios();
    if (localStorage.getItem('token') != null) {

        $("#root").css({ "display": "none" });
        $("#app").css({ "display": "block" });
        $("#logoutli").css({ "display": "flex" });
    } else {

        $("#app").css({ "display": "none" });
        $("#root").css({ "display": "block" });
        $("#logoutli").css({ "display": "none" });
    }


});
setInterval(() => {
    fecha_hoy = new Date();
}, 1000);
/* setInterval(() => {
    read_temp_TThermok();
    read_temp_TThermok_ext();
}, 8000); */


function read_temp_TThermok() {

    // Get a reference to the database service


    const dbRef = firebase.database().ref('Nodemcu/TThermok').limitToLast(1);


    dbRef.on('value', function (snapshot) {
        temperatura = snapshot.val();
        var temp_aux = 0;

        for (var index in temperatura) {
            temp_aux = temperatura[index];
            temperatura = temp_aux;
            /*  console.log(temperatura); */
        }

    });


}
function read_temp_TThermok_ext() {

    // Get a reference to the database service


    const dbRef = firebase.database().ref('Nodemcu/TThermok').limitToLast(10);


    dbRef.on('value', function (snapshot) {
        temperatura_TThermok = [];
        var TThermok = 0;
        var temp_aux = snapshot.val();
        for (var index in temp_aux) {
            TThermok = temp_aux[index];

            temperatura_TThermok.push(parseFloat(TThermok));

        }
        /*   console.log(temperatura_TThermok); */
    });


}

function read_temp_Hora() {

    // Get a reference to the database service


    var horaRef = firebase.database().ref('Nodemcu/Hora').limitToLast(10);


    horaRef.on('value', function (snapshot) {
        temperatura_hora = [];
        var hora;
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


    var minutoRef = firebase.database().ref('Nodemcu/Minutos').limitToLast(10);


    minutoRef.on('value', function (snapshot) {
        temperatura_minuto = [];
        var minuto;
        var minutoAux = snapshot.val();

        for (var index in minutoAux) {
            minuto = minutoAux[index];
            temperatura_minuto.push(parseFloat(minuto));

        }
        /* console.log(temperatura_minuto); */

    });



}
function read_temp_Days() {
    // Get a reference to the database service


    var diaRef = firebase.database().ref('Nodemcu/Dia').limitToLast(10);


    diaRef.on('value', function (snapshot) {
        temperatura_dia = [];
        var dia;
        var diaAux = snapshot.val();

        for (var index in diaAux) {
            dia = diaAux[index];
            temperatura_dia.push(parseFloat(dia));

        }

        /*   console.log(temperatura_dia); */
    });
}
function read_temp_Months() {
    // Get a reference to the database service


    var monthRef = firebase.database().ref('Nodemcu/Mes').limitToLast(10);


    monthRef.on('value', function (snapshot) {
        temperatura_month = [];
        var month;
        var monthAux = snapshot.val();

        for (var index in monthAux) {
            month = monthAux[index];
            temperatura_month.push(parseFloat(month));

        }

        /* console.log(temperatura_month); */
    });
}
function read_temp_Anios() {
    // Get a reference to the database service


    var anioRef = firebase.database().ref('Nodemcu/Ano').limitToLast(10);


    anioRef.on('value', function (snapshot) {
        temperatura_anio = [];
        var anio;
        var anioAux = snapshot.val();

        for (var index in anioAux) {
            anio = anioAux[index];
            temperatura_anio.push(parseFloat(anio));

        }

        /* console.log(temperatura_anio); */
    });
}

const auth = firebase.auth();
$("#signInWithMail").on("click", function () {
    var email = $("#mail").val();
    var password = $("#password").val();

    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {

    });
})





$("#logout").on("click", (e) => {
    e.preventDefault();
    auth.signOut().then((result) => {

        localStorage.removeItem("token");
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

        localStorage.setItem('token', result.credential.idToken);
        $("#root").css({ "display": "none" });
        $("#app").css({ "display": "block" });
        $("#logoutli").css({ "display": "flex" });
        /*     read_temp_TThermok(); */
    })
        .catch(err => {
            console.log(err);
        })
});

