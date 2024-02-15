'use strict';

function getCoupeNumber(seatNumber) {
	if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
		return 'Помилка! Перевірте правельність введення номера місця';
	} else if (seatNumber === 0 || seatNumber > 36) {
		return 'Таких місць в цьому вагоні не існує';
	}
   
	return Math.ceil(seatNumber / 4);
}
getCoupeNumber(13);



