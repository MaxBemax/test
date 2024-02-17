'use strict';

function getTimeFromminutes(minutesTotal) {
	if (minutesTotal > 600 || minutesTotal < 0 || typeof (minutesTotal) !== 'number' || !Number.isInteger(minutesTotal)) {
		return 'Помилка! Перевірте введенні данні';
	}

	const hours = Math.trunc(minutesTotal / 60);
	const minutes = minutesTotal % 60;
	
	let hoursStr = '';

	switch (hours) {
	case 0:
		hoursStr = 'годин';
		break;
	case 1:
		hoursStr = 'година';
		break;
	case 2:
	case 3:
	case 4:
		hoursStr = 'години';
		break;
	default:
		hoursStr = 'годин';	
	}

	return `Це ${hours} ${hoursStr} та ${minutes} хвилин`;
}
getTimeFromminutes(38);


