let gas = (g) => {
	var list = [];
	var alarms = [];
	g.forEach(med => {
		list.unshift(med["valor"]);

		if (med["alerta"] === 1) { //normal
			alarms.unshift(0);
			//alarms.push(med["alerta"]);
		}

		else if (med["alerta"] === 2) { //alarma
			alarms.unshift(1);
			//alarms.push(med["alerta"]);
		}
		
		else if (med["alerta"] === 3) { //muerte
			alarms.unshift(2);
			//alarms.push(med["alerta"]);
		}
		else {
			alarms.unshift(0);
		}
	});

	return [list, alarms]; 
}

module.exports = {
    gas
}