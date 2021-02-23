//timers o funciones temporales

'use strict'


window.addEventListener('load',()=>{
    var tiempo = setInterval(()=>{
        console.log('este mensaje se muestra cada 3 segundos');
    },3000); 
}); 