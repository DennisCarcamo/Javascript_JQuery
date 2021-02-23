'use strict'
//DOM Document Object Module
var div1 = document.getElementById('div1');
console.log(div1);

div1.innerHTML = 'Este es el nuevo valor de div1';
div1.style.fontSize ='25px';

var parrafo1 = document.getElementsByClassName('parrafo1');
console.log(parrafo1[0].innerHTML);

//BOOM BROWSER OBJECT MODEL
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(screen.height);
console.log(window.location);