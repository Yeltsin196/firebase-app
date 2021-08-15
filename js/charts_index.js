

var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};

var randomData = function () {

    return [52, 22, 17, 78];
};

var randomValue = function (data) {
    /* console.log(data); */
    return Math.max.apply(null, data) * Math.random();
};

var data = randomData();

var value = 0;

var config = {
    type: 'gauge',
    data: {
        labels: ['Success', 'Warning', 'Warning', 'Error'],
        datasets: [{
            data: data,
            value: value,
            backgroundColor: ['green', 'yellow', 'orange', 'red'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Temperatura'
        },
        layout: {
            padding: {
                bottom: 30
            }
        },
        needle: {
            // Needle circle radius as the percentage of the chart area width
            radiusPercentage: 2,
            // Needle width as the percentage of the chart area width
            widthPercentage: 3.2,
            // Needle length as the percentage of the interval between inner radius (0%) and outer radius (100%) of the arc
            lengthPercentage: 80,
            // The color of the needle
            color: 'rgba(0, 0, 0, 1)'
        },
        valueLabel: {
            /*  callback: function (value) {
                 return value * 3;
             } */
            formatter: function (value) {
                return value * 4 + ' °C';
            },
        }
    }
};

cargar(config)
setInterval(() => {
    actualizar();
}, time_interval_hour);


function actualizar() {

    config.data.datasets.forEach(function (dataset) {
        dataset.data = randomData();
        dataset.value = 300 / 4;


    });

    window.myGauge.update();

}



function cargar(config) {

    window.onload = function () {
        var ctx = document.getElementById('chart').getContext('2d');

        setTimeout(() => {
            config.data.datasets[0].value = temperatura / 4;

            window.myGauge = new Chart(ctx, config);
        }, time_default);
    };
}