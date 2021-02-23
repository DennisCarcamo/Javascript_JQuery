'use script';

//una funcion es un bloque de codigo que se ejecuta cada vez que es llamado. 
function EsteNombreFuncion(){
    return 'este es el return de la funcion EsteNombreFuncion'; 
}

function MostrarMensaje(){
    console.log('Hola que tal estoy dentro de la funcion MostarrMensaje'); 
}

console.log(EsteNombreFuncion()); 
MostrarMensaje(); 

//funciones con parametros
var m1 = prompt('ingresa una palabra','no nos has dicho nada '); 
var m2 = prompt('ingresa otra palabra','no has puesto nada'); 

//funcion tipica
function UnirPalabras(m1, m2){
    return m1 + m2; 
}

//funciones flecha
let UnirPalabras2 = (m1,m2) => m1+m2; 
console.log('Resultados de unir palabras1: '+ UnirPalabras(m1,m2));
console.log('Resultado de unir palabras2: '+ UnirPalabras2(m1,m2));

//un parametro sera opcional si esta inicializado en los parametros a recibir de la funcion. 
function UnirPalabras3 (m1,m2, m3 = false){
    if(m3 == false){
        return m1 + ' ' + m2;
    }else{
        document.write(m1 + ' ' + m2);
    }
}

console.log('Lamando a la funcion con parametro opcional: '+ UnirPalabras3(m1,m2,true));