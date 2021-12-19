$(document).ready(function () {
    $('.menu_burger').click(function (event) {
        $('.menu_burger,.header_list,.changeTheme').toggleClass('active');

    });
});
$(document).ready(function () {
    $('.changeTheme').click(function (event) {
        $('.header,.main').toggleClass('active');

    });
});