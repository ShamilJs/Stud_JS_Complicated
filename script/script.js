'use strict';

const element = document.querySelector('.new');

let appDate = {
	week: [
		'Восскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
	],
	Month: [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	],

	getDate: function () {
		let now = new Date();

		appDate.date = now.getDate();

		appDate.week = appDate.week[now.getDay()];
		appDate.indexWeek = now.getDay();
		appDate.Month = appDate.Month[now.getMonth()];
		appDate.indexMonth = now.getMonth() + 1;
		appDate.year = now.getFullYear();

		appDate.hours = now.getHours();
		appDate.minutes = now.getMinutes();
		appDate.seconds = now.getSeconds();
	},

	getMinutesOrSecond: function (arg) {
		if (arg === 1 || arg === 21 || arg === 31 || arg === 41 || arg === 51) {
			if (arg === appDate.minutes) {
				return 'минута';
			} else {
				return 'секунда';
			}
		} else if (
			(arg >= 2 && arg <= 4) ||
			(arg >= 22 && arg <= 24) ||
			(arg >= 32 && arg <= 34) ||
			(arg >= 42 && arg <= 44) ||
			(arg >= 52 && arg <= 54)
		) {
			if (arg === appDate.minutes) {
				return 'минуты';
			} else {
				return 'секунды';
			}
		} else {
			if (arg === appDate.minutes) {
				return 'минут';
			} else {
				return 'секунд';
			}
		}
	},
	getDeclensionOfHours: function () {
		if (appDate.hours === 1 || appDate.hours === 21) {
			return 'час';
		} else if (
			appDate.hours === 2 ||
			appDate.hours === 3 ||
			appDate.hours === 4 ||
			appDate.hours === 22 ||
			appDate.hours === 23 ||
			appDate.hours === 24
		) {
			return 'часa';
		} else {
			return 'часов';
		}
	},
	getDatePlusNull: function () {
		appDate.date += '';
		appDate.indexMonth += '';
		appDate.year += '';
		appDate.hours += '';
		appDate.minutes += '';
		appDate.seconds += '';

		if (appDate.date.length < 2) {
			appDate.date = '0' + appDate.date;
		}
		if (appDate.indexMonth.length < 2) {
			appDate.indexMonth = '0' + appDate.indexMonth;
		}
		if (appDate.year.length < 2) {
			appDate.year = '0' + appDate.year;
		}
		if (appDate.hours.length < 2) {
			appDate.hours = '0' + appDate.hours;
		}
		if (appDate.minutes.length < 2) {
			appDate.minutes = '0' + appDate.minutes;
		}
		if (appDate.seconds.length < 2) {
			appDate.seconds = '0' + appDate.seconds;
		}
	},
	getDataFormatA: function () {
		appDate.getDate();

		const newElement = document.createElement('p');

		newElement.innerHTML = `<p class="new"> <b> Сегодня ${appDate.week},
        ${appDate.date} ${appDate.Month} ${appDate.year} года,
        ${appDate.hours} ${appDate.getDeclensionOfHours()} ${
			appDate.minutes
		} ${appDate.getMinutesOrSecond(appDate.minutes)} ${appDate.seconds}
        ${appDate.getMinutesOrSecond(appDate.seconds)}</b></p>
	    `;
		element.append(newElement);
	},
	getDataFormatB: function () {
		appDate.getDatePlusNull();

		const newElement = document.createElement('p');
		newElement.innerHTML = `<p class="new"> <b>${appDate.date}.${appDate.indexMonth}.${appDate.year} 
        - ${appDate.hours}:${appDate.minutes}:${appDate.seconds} </b></p>
	    `;
		element.append(newElement);
	},
	timerDate: function () {
		let timer = setInterval(() => appDate.getDataFormatB(), 1000);
	},
};
appDate.getDataFormatA();
appDate.getDataFormatB();
appDate.timerDate();
