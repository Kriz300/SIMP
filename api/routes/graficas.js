const router = require("express").Router();
const DataSets = require("../scripts/datasets");

router.get("/:plazo&:monto&:valor_cuota", async (req, res) => {
	
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

	var variables = DataSets(t,g,r);

    res.send([variables, options]);
});

module.exports = router;