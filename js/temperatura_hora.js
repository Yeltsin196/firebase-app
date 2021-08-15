var ctx = document.getElementById('medidas1').getContext('2d');
var horas_label = [];
var cant_horas = 10;
var chart_hora;

setTimeout(() => {
    cargar_label();
    cargar_medidas_hora();
}, time_default);
setInterval(() => {
    cargar_label();
    addData(chart_hora);
}, time_interval_hour);
function cargar_label() {
    horas_label = [];
    for (i = (cant_horas - 2); i >= 0; i--) {
        var fecha = new Date(fecha_hoy.getYear(), fecha_hoy.getMonth(), fecha_hoy.getDate(), fecha_hoy.getHours() - i, fecha_hoy.getMinutes(), 0, 0);
        var minutes = fecha_hoy.getMinutes();
        if (fecha_hoy.getMinutes() < 10) {
            minutes = `0${fecha_hoy.getMinutes()}`;
        }


        horas_label.push(`${fecha_hoy.getHours() - i}:${minutes}`);
    }
}


function cargar_medidas_hora() {
    chart_hora = new Chart(ctx, {
        type: 'line',
        data: {
            labels: horas_label,
            datasets: [{
                data: temperatura_hora,
                label: "Total",
                borderColor: "#3e95cd",
                backgroundColor: "#7bb6dd",
                fill: false,
            },
            ]
        },
    });
}

function addData(chart_hora) {
    chart_hora.data.labels = horas_label;


    chart_hora.data.datasets.data = temperatura_hora;
    window.chart_hora.update();
}