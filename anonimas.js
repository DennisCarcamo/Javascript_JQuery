'use strict'

//funciones anonimas

function sumar(n1,n2,multiplicar){
    var suma = n1 + n2; 
    multiplicar(suma); 
    return suma; 
}

sumar(5,7,function(d){
    console.log('la suma es '+ d); 
    console.log('la multiplicacion es: '+d*2); 
})


//funcionflecha
sumar(5,7, (d) => {
    console.log('la suma flecha es: '+d);
    console.log('la multiplicacion flecha es: '+ d*2); 
})