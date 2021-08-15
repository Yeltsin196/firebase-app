var ctx_minutos = document.getElementById('medidas2').getContext('2d');
var minutos_label = [];
var cant_minutos = 10;
var chart_minuto;

setTimeout(() => {

    cargar_label_minutos();
    cargar_medidas_minutos();
}, time_default);
setInterval(() => {
    cargar_label_minutos();
    addData_minutos(chart_minuto);
}, time_interval_minute);
function cargar_label_minutos() {
    minutos_label = [];
    for (i = (cant_minutos - 2); i >= 0; i--) {
        var fecha = new Date(fecha_hoy.getYear(), fecha_hoy.getMonth(), fecha_hoy.getDate(), fecha_hoy.getHours(), fecha_hoy.getMinutes() - i, 0, 0);
        var minutes = fecha_hoy.getMinutes() - i;
        if (fecha_hoy.getMinutes() < 10) {
            minutes = `0${fecha_hoy.getMinutes()}`;
        }


        minutos_label.push(`${fecha_hoy.getHours()}:${minutes}`);
    }

}


function cargar_medidas_minutos() {
    chart_minuto = new Chart(ctx_minutos, {
        type: 'line',
        data: {
            labels: minutos_label,
            datasets: [{
                data: temperatura_minuto,
                label: "Total",
                borderColor: "#3e95cd",
                backgroundColor: "#7bb6dd",
                fill: false,
            },
            ]
        },
    });
}

function addData_minutos(chart_minuto) {

    chart_minuto.data.labels = minutos_label;


    chart_minuto.data.datasets.data = temperatura_minuto;
    window.chart_minuto.update();
}