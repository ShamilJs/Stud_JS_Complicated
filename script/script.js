// 1
let num = 266219;

// 2
let numArr = num.toString().split(''); //Переводим число в строку и преобразуем в массив
let mult = 1; //вводим новую переменную mult, которая будет хранить произведение

for (let i = 0; i < numArr.length; i++) {
    mult *= +numArr[i];
}
console.log(mult); //выводим в консоль 

// 3
let multPow = [mult ** 3]; // Оператор ** используется  в ECMAScript 7 для возведения в степень

// 4
console.log(multPow);