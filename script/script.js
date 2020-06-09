'use strict';

let userMessage = prompt('Введите сообщение', '');

const testFunction = function (userData) {
    if (!!(+userData)) {
        console.log('Вы ввели не строку, пожалуйста повторите ввод');
        return;
    } else {
        let a = userData.split(' ').join(''); //боремся с пробелами
        console.log('Сообщение без пробелов: ', a);

        if (a.length > 30) {
            let b = a.slice(0, 30) + '...';
            console.log('Только 30 символов: ', b);
        }
    }
};
testFunction(userMessage);