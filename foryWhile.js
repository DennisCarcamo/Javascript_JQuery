'use strict';
//bucle for
//dentro del bucle hay tres partes
//inicializacion
//Evaluacion
//iteracion

for(var i =0; i <= 10; i++){
    console.log(i);
}
console.log('Ya sali del for');

//bucle while
var dato = 5; 
while(dato <= 7){
    console.log('El dato vale: '+dato);
    dato++;
}
console.log('ya sali del while');


//bucle do while
dato = 0; 
do{
    console.log('el valor de dato es: '+dato);
    dato++; //importante 
}while(dato <= 5 );
console.log('ya sali del do while');