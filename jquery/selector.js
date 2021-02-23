'use strict';

$(document).ready(function(){
    //selector de etiquetas
    var span = $('span');
    span.css('border', '1px solid blue');
    console.log(span.text());

    //selectores de atributos
    var attributo = $('[title ="Google"]');
    attributo.css('font-size','40px');
    console.log(attributo.text());

    //eventos, selector de id se usa #
    $('#mostrar').click(function(){
        $('#texto').html('Acaba de pulsar el boton');
    });

    $('#ocultar').click(function(){
        $('#texto').hide(1500);
    })

    //hover
    $('#btn').html('Pasa el raton para ver el efecto');
    $('#btn').hover(function(){
        $('#btn').html('El raton esta dentro');
        $('#texto').show(500);
    },function(){
        $('#btn').html('El raton esta fuera');
        $('#texto').hide(500);
    }); 
    //selector de clases se usa .   y 
    $('.parrafo').hover(function(){
        $(this).addClass('borde');
    }, function(){
        $(this).removeClass('borde');
    });

    //efecto Slide
    $('#show').click(function(){
        $('#texto3').slideToggle(1000,'swing', function(){
            console.log('se ha termindao la animacion');
        });
    }); 
});