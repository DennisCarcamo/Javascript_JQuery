'use strict'

var m1 = prompt('ingrese una frase', 'una'); 
var m2 = prompt('ingrese otra frase', 'frase'); 

function MostrarConsola(m1, m2){
    console.log(m1+' '+m2); 
}

function EnDocumento(m1, m2){
    document.write(m1+' '+m2); 
}

function Mostrar(m1,m2, m3 = false){
    if(m3==false){
        MostrarConsola(m1,m2); 
    }else{
        EnDocumento(m1,m2); 
    }
}

Mostrar(m1,m2); 