var ctx = document.getElementsByClassName("velocidade");

var chartGraoh = new Chart(ctx, {

    type: "line",
    data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        datasets: [{
            data: [122, 122, 122, 122, 122, 122, 122, 122, 122, 125, 122, 122, 122, 125, 127.666666666667, 136, 144.333333333333, 155.333333333333, 158, 166.333333333333, 166.333333333333, 172, 172, 175, 175, 177.666666666667, 177.666666666667, 177.666666666667, 177.666666666667, 180.333333333333, 180.333333333333, 180.333333333333, 180.333333333333, 180.333333333333, 180.333333333333, 180.333333333333, 180.333333333333, 180.333333333333, 180.333333333333, 183, 180.333333333333],
            borderWidth: 3,
            borderColor: 'rgba(77,166,253,0.85)',
            backgroundColor: 'transparent',
            pointRadius: 0,

        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Velocidade',
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Tempo(s)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Velocidade(RPS)'
                }
            }
        }
    }

});


var ctx = document.getElementsByClassName("degrau");

var chartGraoh = new Chart(ctx, {

    type: "line",
    data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        datasets: [{
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138, 138],
            borderWidth: 3,
            borderColor: 'rgba(253,166,77,0.85)',
            backgroundColor: 'rgba(253,166,77,0.85)',
            stepped: true,
            pointRadius: 0,
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Degrau',
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Tempo(s)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Duty Cicle(%)'
                }
            }
        }
    }

});
