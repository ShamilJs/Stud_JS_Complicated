'use strict';

const cat = document.querySelector('.cat'),
	button = document.querySelectorAll('.button')[0],
	reset = document.querySelectorAll('.button')[1];

let div, requestId,
	step1 = 0,
	step2 = 0, 
	count = 0;

cat.style.marginLeft = '300px';
cat.style.marginTop = '50px';
cat.style.position = 'relative'; 

const createElem = () => {
		div = document.createElement('div');
		div.style.width = '100px';
		div.style.height = '100px';
		div.style.background = 'black';
		div.style.marginLeft = '300px';
		div.style.position = 'relative'; 
		document.body.append(div);
};
createElem();

const animeQ = () => {
	requestId = requestAnimationFrame(animeQ);
	step2 -=2;
	cat.style.bottom = step2 + 'px';
	div.style.bottom = step2 + 'px';
	div.style.opacity =(1 + 0.004*step2);
	cat.style.opacity =(1 + 0.004*step2);
	if(step2 < -300){
		step2 = div.style.bottom;
		cancelAnimationFrame(requestId);
	}
};

const animeCat = () => {
	requestId = requestAnimationFrame(animeCat);
		if(step1 < 50){
			step1 +=5;
			cat.style.bottom = step1 + 'px';
		}
		else {
			step1 = 0;
			step1 -=2;
			cat.style.bottom = step1 + 'px';
			if(step1 > -50) {
				step1 = 0;
				cancelAnimationFrame(requestId);
				animeQ();
			}
		}
};

button.addEventListener('click', () => {
	count ++;
	if(count === 1){
		animeCat();
	}else if(count === 2){
		cancelAnimationFrame(requestId);
	}else if(count === 3){
		count = 1;
		animeQ();
	}
});

reset.addEventListener('click', () => {
	count = 0;
	step1 = 0;
	step2 = 0;
	cancelAnimationFrame(requestId);
	cat.style.bottom = 0 + 'px';
	div.style.bottom = 0 + 'px';
	div.style.opacity =1;
	cat.style.opacity =1;
});