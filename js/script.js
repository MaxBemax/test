'use strict';

function calculateVolumeAndArea(side) {
	if (typeof (side) !== 'number' || side < 0 || !Number.isInteger(side)) {
		console.log('При обчисленні сталася помилка!');
		return ;
	}
	let volume = 0,
		area = 0;
	
	volume = side * side * side;
	area = 6 * (side * side);

	console.log(`Об'єм куба: ${volume}, площа всієї поверхні: ${area}`);
	
	return;
}
calculateVolumeAndArea(15);



