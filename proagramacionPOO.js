'use strict'

//programacion Orientada a Objetos

function persona(edad, altura, peso){
    this.edad = edad; 
    this.altura = altura; 
    this.peso = peso; 

    this.getEdad = ()=>{
        this.edad; 
    }

    this.caminar = ()=>{
        console.log('Esta persona esta caminando');
    }

    this.sentarse = ()=>{
        console.log('Esta persona se sento'); 
    } 


}

var Manuel = new persona(37,1,60);
var Lucia = new persona(22,1.98,60);
Manuel.caminar();
Lucia.sentarse();