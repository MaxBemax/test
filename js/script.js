'use strict';


const personalPlanPeter = {
	name: 'Peter',
	age: '29',
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%'
		},
		exp: '1 month'
	},
	showAgeAndLangs: function (plan) {
		const { age } = plan;
		const { languages } = plan.skills;
		let str = `Мені ${age} я володію мовами: `;
		
		languages.forEach(function (lang) {
			str += `${lang.toUpperCase()} `;
		});

		return str;
	}
	
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
	const { exp } = plan.skills;
	return exp;
}

showExperience(personalPlanPeter);
console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
	let str = '';
	const { programmingLangs } = plan.skills;
	for (let key in programmingLangs) {
		str += `Мова ${key} вивчена на ${programmingLangs[key]}\n`;
	}

	return str;
}
console.log(showProgrammingLangs(personalPlanPeter));