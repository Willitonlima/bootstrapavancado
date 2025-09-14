$(document).ready(function() {

    $('.irPara').on('click', (function (e) {
        e.preventDefaut(); //Evita o salto direto 

        const targetId = $(this).attr('href'); //Pega as identificações de destino

        $('html, body').animate({
            scrollTop: $(targetId).offset().top //escrola suavemente ate o elemento q eu pedi
        }, 800);
    }))
});
