var edad = 0;
var texto = '';

switch(edad){
    case 18:
        texto = 'Eres menor de edad';
        break; 
    case 20:
        texto = 'Eres mayor de edad';
        break; 
    default:
        texto = 'Al parecer no tienes edad'; 
    
}

console.log(texto); 