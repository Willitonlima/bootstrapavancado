$(document).ready(function() {
    $('.irPara').on('click', function (e) {
        e.preventDefault(); // evita o salto instantâneo

        const targetId = $(this).attr('href'); // pega o destino (#inicio, #personagens, #sobre)

        $('html, body').animate({
            scrollTop: $(targetId).offset().top
        }, 600); // 600ms = rolagem suave
    });
});