'use strict';

const element = document.querySelector('.new');

let appWeekData = {
	week: [
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
		'Восскресенье',
	],
	getWeekConsole: function () {
		console.log('Все дни недели: ', appWeekData.week);
	},
	getWeekParagraph: function () {
		appWeekData.week.forEach((item) => {
			console.log(item);
		});
	},
	getWeekItalics: function () {
		const newElement = document.createElement('p');
		let week = appWeekData.week.slice(0, 5);
		let newArr = appWeekData.week.slice(5);
		newElement.innerHTML = `<p class="new">  ${week},<em>${newArr}</em></p>
        `;
		element.append(newElement);
		console.log(`${week},%c${newArr}`, 'font-style: italic');
	},

	getWeekBold: function () {
		let now = new Date();
		let indexWeekDay = now.getDay();
		let weekDay;

		if (indexWeekDay === 0) {
			indexWeekDay += 6;
			weekDay = appWeekData.week[indexWeekDay];
			console.log(
				`${appWeekData.week.slice(0, indexWeekDay)} %c${weekDay}`,
				'font-weight: bold'
			);
		} else {
			indexWeekDay--;
			weekDay = appWeekData.week[indexWeekDay];
			console.log(
				`${appWeekData.week.slice(0, indexWeekDay)} %c${weekDay}`,
				'font-weight: bold',
				`${appWeekData.week.slice(indexWeekDay + 1)}`
			);
		}
		const newElement = document.createElement('p');
		newElement.innerHTML = `<p class="new"> ${appWeekData.week.slice(
			0,
			indexWeekDay
		)} <b>${weekDay}</b> ${appWeekData.week.slice(indexWeekDay + 1)}</p>
		`;
		element.append(newElement);
	},
};
appWeekData.getWeekConsole();
appWeekData.getWeekParagraph();
appWeekData.getWeekItalics();
appWeekData.getWeekBold();
