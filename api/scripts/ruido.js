let ruido = (o) => {
	var list = [];
	var alarms = [];
	o.forEach(med => {
		list.unshift(med["valor"]);

		if (med["alerta"] === 0) { //normal
			alarms.unshift(0);
			//alarms.push(med["alerta"]);
		}

		else if (med["alerta"] === 1) { //alto
			alarms.unshift(1);
			//alarms.push(med["alerta"]);
		}

		else {
			alarms.unshift(0);
		}
	});

	return [list, alarms]; 
}

module.exports = {
    ruido
}