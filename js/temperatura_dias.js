var ctx_dias = document.getElementById('medidas3').getContext('2d');
var dias_label = [];
var cant_dias = 5;
var chart_dia;

setTimeout(() => {

    cargar_label_dias();
    cargar_medidas_dias();
}, time_default);
setInterval(() => {

    cargar_label_dias();
    addData_dias(chart_dia);
}, time_interval_minute);
function cargar_label_dias() {
    dias_label = [];
    for (i = (cant_dias - 1); i >= 0; i--) {
        /*     var dia = new Date(fecha_hoy.getYear(), fecha_hoy.getMonth(), fecha_hoy.getDate()); */

        var dia = (fecha_hoy.getDate() - i) + '/' + (fecha_hoy.getMonth() + 1);

        dias_label.push(dia);
    }

}


function cargar_medidas_dias() {
    chart_dia = new Chart(ctx_dias, {
        type: 'line',
        data: {
            labels: dias_label,
            datasets: [{
                data: temperatura_dia,
                label: "Total",
                borderColor: "#3e95cd",
                backgroundColor: "#7bb6dd",
                fill: false,
            },
            ]
        },
    });
}

function addData_dias(chart_dia) {
    ;
    chart_dia.data.labels = dias_label;


    chart_dia.data.datasets.data = temperatura_dia;
    window.chart_dia.update();
}