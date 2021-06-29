const router = require("express").Router();
const DataSets = require("../scripts/datasets");
const temp = require("../database/schemas/temp");
const gas = require("../database/schemas/gas");
const ruido = require("../database/schemas/ruido");

router.get("/:id", async (req, res) => {
	var flag = "false";
	var variables;
	var options = [{
			legend: {
				display: true,
				position: 'top',
				labels: {
					boxWidth: 80,
					fontColor: 'black'
				}
			},
			scales: {
				xAxes: [{
					ticks:{
						stepSize : 10,
						min: 0,
						max: 168
					},
					gridlines: {
						display: false,
						color: "black"
					},
					scaleLabel: {
					display: true,
					labelString: 'Horas'
					}
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true
					},
					gridlines: {
						color: "black",
						borderDash: [2, 5],
					},
					scaleLabel: {
						display: true,
						labelString: '°C / db / Gas'
					}
				}]
			},
			pan: {
				enabled: true,
				mode: "y"
			},
			zoom: {
				enabled: true,
				mode:"y"
			}
		},
		{
			legend: {
				display: true,
				position: 'top',
				labels: {
					boxWidth: 80,
					fontColor: 'black'
				}
			},
			scales: {
				xAxes: [{
					ticks:{
						stepSize : 10,
						min: 0,
						max: 168
					},
					gridlines: {
						display: false,
						color: "black"
					},
					scaleLabel: {
					display: true,
					labelString: 'Horas'
					}
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true
					},
					gridlines: {
						color: "black",
						borderDash: [2, 5],
					},
					scaleLabel: {
						display: true,
						labelString: 'Nivel'
					}
				}]
			},
			pan: {
				enabled: true,
				mode: "y"
			},
			zoom: {
				enabled: true,
				mode:"y"
			}
		},
	];

	const t = await temp.find({'id':parseInt(req.params['id'])},(err) => {
        if (err) console.error(err)
        return;
    });

	const g = await gas.find({'id':parseInt(req.params['id'])},(err) => {
        if (err) console.error(err)
        return;
    });

	const r = await ruido.find({'id':parseInt(req.params['id'])},(err) => {
        if (err) console.error(err)
        return;
    });

	if (t != null && g != null && r != null) {
		variables = DataSets.DataSets(t,g,r);
		flag = [variables, options];
	}

    res.send(flag);
});

module.exports = router;