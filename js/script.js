$(function () {
    let menuOffset = $('.navbar').offset().top;

    // window scroll
    $(window).scroll(function () {
        let winScroll = $(window).scrollTop();
        if (menuOffset < winScroll) {
            $('.navbar').addClass('menufixed');
        } else {
            $('.navbar').removeClass('menufixed');
        }

        if (winScroll > 400) {
            $('.backtop').fadeIn(500);
        } else {
            $('.backtop').fadeOut(500);
        }
    });

    // backtop click
    $('.backtop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
});