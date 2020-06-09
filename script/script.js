'use strict';

let userMessage = prompt('Введите сообщение', '');
let step = 0;

const testFunction = function (userData) {
    userData = userData.split(''); //строку --> в массив и перебираем
    userData.forEach(element => {
        if (!!(+element)) {
            console.log('Вы ввели не строку, пожалуйста повторите ввод');
            step++;
            return;
        }
    });
    if (step !== 0) {
        return;
    } else {
        userData = userData.join(''); //возвращаемся к строке
        let a = userData.split(' ').join(''); //боремся с пробелами
        console.log('Сообщение без пробелов: ', a);

        if (a.length > 30) {
            let b = a.split('');
            b.splice(30, (a.length - 30), '...');
            console.log('Только 30 символов: ', b);
        }
    }
};
testFunction(userMessage);