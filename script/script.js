'use strict';

// 1

let arr = [
	'66462132326',
	'465626123655',
	'26465323565',
	'6565945132445',
	'88989898799',
	'99999999977',
	'24562187933',
];

const checkArr = function () {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
			console.log(`Искомое число ${i}:  `, +arr[i]);
		}
	}
};
checkArr();

// 2

const primeNumber = function (n) {
	nextIteration: for (let i = 2; i <= n; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j === 0) {
				continue nextIteration;
			}
		}
		console.log(i, `Делители этого числа: 1 и ${i}`);
	}
};
primeNumber(100);
