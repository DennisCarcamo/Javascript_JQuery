'use strict'

var boton = document.querySelector('#boton'); 
var div1 = document.querySelector('#div1');


// las funciones del mouse en el html se les coloca el 'on' ejemplo onclick
// pero en javascript se les remueve el on ejemplo 'click'
//boton.addEventListener('click', () =>{
//    console.log('As pulsado el boton');
//    div1.innerHTML = 'As pulsado el boton';
//});

function pulsar(){
    div1.innerHTML = "has hecho click"; 
}

function Alerta(){
    alert('has pulsado una alerta');
}


//otras opciones del evento del raton

// ocontextmenu   es para usar el boton izquiero del raton. 
// onmouseceenter  cuando precionamos el boton central. 
// onmousedown al mover el muse hacia abajo. 
// ondblclick  al hacer doble click. 
// onmouseleave al levantar el click despues de pulsar. 
// onmouseover cuando el puntero pasa sobre el objeto de html
// onmouseup  cuando el usuario deja de precionar el elemento html. 


