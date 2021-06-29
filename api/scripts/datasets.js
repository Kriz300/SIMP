const temp = require("./temp");
const gas = require("./gas");
const ruido = require("./ruido");

let DataSets = (t,g,r) => {
    var meds = [temp(t), gas(g), ruido(r)];
    var D;
    var list = [];
    for (let i = 0; i < 2; i++) {
        D = {
            labels: range(168),
            datasets: 
            [
                {
                    label: "Temperatura",
                    data: meds[0][i],
                    lineTension: 0,
                    fill: false,
                    borderColor: 'orange',
                    backgroundColor: 'transparent',
                    pointBorderColor: 'orange',
                    pointBackgroundColor: 'rgba(255,150,0,0.5)',
                    borderDash: [5, 5],
                    pointRadius: 5,
                    pointHoverRadius: 10,
                    pointHitRadius: 30,
                    pointBorderWidth: 2,
                    pointStyle: 'rectRounded'
                },
                {
                    label: "Gas",
                    data: meds[1][i],
                    lineTension: 0,
                    fill: false,
                    borderColor: 'green',
                    backgroundColor: 'transparent',
                    pointBorderColor: 'green',
                    pointBackgroundColor: 'rgba(255,150,0,0.5)',
                    borderDash: [5, 5],
                    pointRadius: 5,
                    pointHoverRadius: 10,
                    pointHitRadius: 30,
                    pointBorderWidth: 2,
                    pointStyle: 'rectRounded'
                },
                {
                    label: "Ruido",
                    data: meds[2][i],
                    lineTension: 0,
                    fill: false,
                    borderColor: 'black',
                    backgroundColor: 'transparent',
                    pointBorderColor: 'black',
                    pointBackgroundColor: 'rgba(255,150,0,0.5)',
                    borderDash: [5, 5],
                    pointRadius: 5,
                    pointHoverRadius: 10,
                    pointHitRadius: 30,
                    pointBorderWidth: 2,
                    pointStyle: 'rectRounded'
                }
            ]
        }
        list.push(D);
    }
	return list;
}

module.exports = {
    DataSets
}