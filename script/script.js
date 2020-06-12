'use strict';

const element = document.querySelector('.new');

let appWeekData = {
    week: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Восскресенье'],
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
        let newArr = appWeekData.week.slice(5);
        newElement.innerHTML = `<p class="new"> <em> ${newArr}</em></p>
        `;
        element.append(newElement);
        console.log(`%c${newArr}`, 'font-style: italic');
    },
    getWeekBold: function () {
        let now = new Date();
        let weekDay = appWeekData.week[now.getDay() - 1];
        const newElement = document.createElement('p');
        newElement.innerHTML = `<p class="new"> <b> ${weekDay}</b></p>
        `;
        element.append(newElement);
        console.log(`%c${weekDay}`, 'font-weight: bold');

    }
};
appWeekData.getWeekConsole();
appWeekData.getWeekParagraph();
appWeekData.getWeekItalics();
appWeekData.getWeekBold();