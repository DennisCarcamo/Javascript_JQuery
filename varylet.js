'use strict'; 
//var permite mantener el valor de la variable tener el mismo  en todo el programa. 
var numero = 20;
console.log(numero); 

if (true){
    //let modifica la variable solamente dentro del bloque que se creo
    let numero = 40;
    console.log(numero);
}

console.log(numero);