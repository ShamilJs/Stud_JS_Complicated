'use strict';


const button = document.querySelector('.button'),
	  codeColor = document.querySelector('.code-color');

button.addEventListener('click', function(){
	let r = Math.floor(Math.random() * (256)),
   		g = Math.floor(Math.random() * (256)),
   		b = Math.floor(Math.random() * (256)),
   		color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
   		console.log(color);
   		codeColor.textContent = color;
   		document.body.style.background = color;

});
