'use strict'

//parametros rest ...p3 lo mostrara como arreglo

function ListadoPaises(p1,p2,...p3){
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

ListadoPaises('espana','Alemania','Honduras', 'USA', 'Italia');