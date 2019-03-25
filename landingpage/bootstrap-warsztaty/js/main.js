window.onscroll = function () {
    pokolorujMenu()
};

/*function pokolorujMenu() {
    if (window.pageYOffset == 0) {
        $('#main-nav').css('background-color', 'rgba(14, 216, 214, 0.0)'); ;
    } else {
        $('#main-nav').css('background-color', 'rgba(14, 216, 214, 0.6)');
        $('#main-nav').css('transition-duration', '1s');
    }
}*/


function pokolorujMenu() {
    var target = $('button[data-scrollto]').attr('data-scrollto');
    if (window.pageYOffset < $(target).offset().top) {
        $('#main-nav').css('background-color', 'rgba(14, 216, 214, 0.0)'); ;
    } else {
        $('#main-nav').css('background-color', 'rgba(14, 216, 214, 0.6)');
        $('#main-nav').css('transition-duration', '1s');
    }
}

$('button[data-scrollto]').on('click', function(e) {
/*    e.preventDefault();*/
    var target = $(this).attr('data-scrollto');
    var topPosition = $(target).offset().top;
    
    $('html, body').animate(
        {scrollTop: topPosition},
        600
    );
});