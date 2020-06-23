'use strict';


const button = document.querySelector('.button'),
	  codeColor = document.querySelector('.code-color');

button.addEventListener('click', function(){
	let r = Math.floor(Math.random() * (256)),
   		g = Math.floor(Math.random() * (256)),
   		b = Math.floor(Math.random() * (256)),
         q = Math.floor(Math.random() * (10)),
   		color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
       		if (color.length < 7) {
   			color += q.toString(16);
   		}
   		
   		codeColor.textContent = color;
   		document.body.style.background = color;

});
