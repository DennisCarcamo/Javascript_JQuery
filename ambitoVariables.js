'use script'

var global = 'Variable Global'; 

function MostarConsola(){
    //la variable funcion solo vive dentro del bloque de la funcion. 
    var variable_funcion = 'Variable de la funcion';
    console.log(global);
    console.log(variable_funcion);
}

MostarConsola();
//aqui la variable_funcion no existe fuera del bloque de MostrarConsola. 
//console.log(variable_funcion);
console.log(global);