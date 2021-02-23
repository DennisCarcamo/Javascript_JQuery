'use script'
//comprobar si es posible usar el local storage
if(typeof(Storage)){
    console.log('disponible');
}else{
    console.log('no disponible');
}
//insertar un valor en local storage
localStorage.setItem('clave', 'Valor de la clave');
localStorage.setItem('edad', 37);

//sacar un valor de el local storage. 
var valor = localStorage.getItem('clave');
console.log(valor);


//JSON
var persona = {
    'nombre':'Dennis Carcamo', 
    'edad': 37, 
    'Profesion':'Ingenieria de Sistemas'
}
localStorage.setItem('persona', JSON.stringify(persona));
var per = JSON.parse(localStorage.getItem('persona'));
console.log(per.nombre);

var personas = {
    'edad':20,
    'altura': 1.97,
    'peso':162
}

var coches = [{
    'marca':'toyota',
    'color':'rojo'
    },
    {
        'marca':'mitsubisy',
        'color':'azul'
    }
]

console.log(personas.altura);
console.log(coches[0].color);