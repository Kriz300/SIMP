let temp = (t) => {
	var list = [];
	var alarms = [];
	t.forEach(med => {
		list.unshift(med["valor"]);

		if (med["alerta"] === 1) { //baja
			alarms.unshift(-1);
			//alarms.push(med["alerta"]);
		}

		else if (med["alerta"] === 2) { //normal
			alarms.unshift(0);
			//alarms.push(med["alerta"]);
		}
		
		else if (med["alerta"] === 3) { //alta
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
    temp
}