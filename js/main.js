$(function () {
    function toggleMenu() {
        $('.nav-list').toggleClass('nav-menu--show ');
        $('.basket-list').toggleClass('nav-menu--show ');
        // $('.header-nav').css('margin-bottom', '133px');
    }

    $('.header__btn').on('click', function (evt) {

        evt.preventDefault();
        $('.navbar-toggler__icon').toggleClass('navbar-toggler__icon--close');
        toggleMenu();
    });

});