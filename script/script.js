'used strict';

let lang = prompt('Введите язык (ru или en)', '');

// 1
// Через if
let weekDayRu = [
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье',
];
let weekDayEn = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

if (lang === 'ru') {

    console.log('Выбрана неделя на русском: ', weekDayRu);

} else if (lang === 'en') {
    console.log('Выбрана неделя на английском: ', weekDayEn);
}
// Через switch
switch (lang) {
    case 'ru':
        console.log('Выбрана неделя на русском: ', weekDayRu);
        break;
    case 'en':
        console.log('Выбрана неделя на английском: ', weekDayEn);
        break;
}

// через массив (применяю фильтрацию)
let weekDay = [{
        id: 'ru',
        week: [
            'понедельник',
            'вторник',
            'среда',
            'четверг',
            'пятница',
            'суббота',
            'воскресенье',
        ]
    },
    {
        id: 'en',
        week: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
        ]
    }
];

let user = weekDay.find(item => item.id === `${lang}`);
console.log('Выбранная неделя: ', user.week);

// 2
let namePerson = prompt('Введите имя', 'Артем');

namePerson = (namePerson === 'Артем') ? 'директор' :
    (namePerson === 'Максим') ? 'преподаватель' :
    'студент';
console.log('namePerson: ', namePerson);