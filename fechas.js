'use strict'

//fechas
setInterval(() => {
    var fecha = new Date(); 
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes(); 
    var seg = fecha.getSeconds();
    var div1 = document.getElementById('div1'); 
    div1.innerHTML = hora +' : '+minutos+" : " + seg; 
    var div2 = document.querySelector('#div2');
    div2.innerHTML = hora +' : '+minutos+" : "+seg; 
}, 1000);

