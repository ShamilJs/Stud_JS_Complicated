'use strict';

const element = document.querySelector('.new'),
	  reg = document.querySelector('.reg'),
      autores = document.querySelector('.autores');

let arrayUsers = [];
const parseJson = function() {
	let storageJson = localStorage.getItem('json');
	if (storageJson === null) {
		return;

	} else {
		 arrayUsers = JSON.parse(storageJson);
	}
};
parseJson();


let appDate = {
	regDate: '',
	monthArray: [
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
		appDate.Month = appDate.monthArray[now.getMonth()];
		appDate.indexMonth = now.getMonth() + 1;
		appDate.year = now.getFullYear();
		appDate.hours = now.getHours();
		appDate.minutes = now.getMinutes();
		appDate.seconds = now.getSeconds();
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

	getData: function () {
		appDate.getDate();
		appDate.getDatePlusNull();
		appDate.regDate = `${appDate.date} ${appDate.Month} ${appDate.year} г., ${appDate.hours}:${appDate.minutes}:${appDate.seconds}`;
		return appDate.regDate;
	},
};

let err = 0;

let dataUser = {
	getName: function() {
		let userName;
		let count =  0;
			do {
				userName = prompt('Введите имя и фамилию через пробел');
				if (userName === null) {
					err++;
					return;
				}
				userName = userName.trim();
				userName = userName.split(' ');
				userName = userName.join(',');
				userName = userName.split(',');
					if (userName.length > 2 || userName.length < 2) {
						alert('Данные не корректны, повторите снова!');
						count ++;
					}
					if (count > 0) {
						count = 0;
						dataUser.getName();
						return;
					}
					dataUser.nameUser = userName[0];
					dataUser.lastNameUser = userName[1];
				userName = userName.join('');
			} while (userName === '');
		userName = userName.split(',');
		dataUser.getLogin();	
		},

	getLogin: function(){
		let userLogin;
		do {
			userLogin = prompt('Введите логин');
				if (userLogin === null) {
					return;
				}
			userLogin = userLogin.trim();
		} while (userLogin === '');
	dataUser.login = userLogin;
	dataUser.getPassword();	
	},

	getPassword: function(){
		let userPassword;
		do {
			userPassword = prompt('Введите пароль');
				if (userPassword === null) {
					return;
				}
			userPassword = userPassword.trim();
		} while (userPassword === '');
		dataUser.password = userPassword;
		dataUser.regDate = appDate.getData();
	},
};

const renderArray = function () {
	 element.textContent = '';
	arrayUsers.forEach(function(item, index) {
		const li = document.createElement('li');
		li.classList.add('new');
		li.innerHTML = `Имя: ${item.nameUser}, фамилия: ${item.lastNameUser},
						зарегистрирован: ${item.regDate} <button class="btn-remove">Удалить</button>`;
		element.append(li);
		let buttonRemove = li.querySelector('.btn-remove');
		buttonRemove.addEventListener('click', function(){
			arrayUsers.splice(index, 1);
				renderArray();
		});


	});
let json = JSON.stringify(arrayUsers);
	localStorage.setItem('json',json);		
};
renderArray();

reg.addEventListener('click', function(){
	dataUser.getName();
	if (err > 0) {
		err = 0;
		return;
		}
	let newDataUser = {
			nameUser: dataUser.nameUser,
			lastNameUser: dataUser.lastNameUser,
			login: dataUser.login,
			password: dataUser.password,
			regDate: dataUser.regDate,
	};
	arrayUsers.push(newDataUser);
	renderArray();
});

autores.addEventListener('click', function(){
	let userLogin = prompt('Введите логин');
	arrayUsers.forEach(function(item){
		if (userLogin === item.login) {
			let userPassword = prompt('Введите пароль');
			if(userPassword === item.password) {
				const h1 = document.querySelector('h1');
				h1.textContent = `Привет, ${item.nameUser} ${item.lastNameUser}!`;
			} else {
				alert('пароль неверный!');
				return;
			}
		} else {
			alert('Такого пользователя нет!');
				return;
		}

	});
});
