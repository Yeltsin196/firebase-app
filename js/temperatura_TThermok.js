var ctx = document.getElementById('medidas1').getContext('2d');
var TThermoks_label = [];
var cant_TThermoks = 10;
var chart_TThermok;

var config_TT;
setTimeout(() => {
    cargar_label();
    cargar_medidas_TThermok();
}, time_default);
setInterval(() => {
    cargar_label();
    addData(chart_TThermok);
}, time_interval_TThermok);
function cargar_label() {
    TThermoks_label = [];
    for (i = 0; i < cant_TThermoks; i++) {
        if (temperatura_minuto[i] < 10) {
            temperatura_minuto[i] = `0${temperatura_minuto[i]}`;
        }
        var fecha = `${temperatura_dia[i]}/${temperatura_month[i]}/${temperatura_anio[i]}  ${temperatura_hora[i]}:${temperatura_minuto[i]}:00`



        TThermoks_label.push(fecha);
    }
}


function cargar_medidas_TThermok() {
    config_TT = {
        type: 'line',
        data: {
            labels: TThermoks_label,
            datasets: [{
                data: temperatura_TThermok,
                label: "Total",
                borderColor: "#F9D423",
                backgroundColor: "#e65c00",
                fill: false,
            },
            ]
        },
    };
    chart_TThermok = new Chart(ctx, config_TT);
}

function addData(chart_TThermok) {
    config_TT.data.datasets.forEach(function (dataset) {
        dataset.data = TThermoks_label;
        dataset.data = temperatura_TThermok;


    });


    chart_TThermok.update();
}