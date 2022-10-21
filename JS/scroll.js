$(document).ready(function () {
    $('#prev').click(function (event) {
        event.preventDefault();
        $('#content').animate({
            scrollLeft: "-=775px"
        }, "slow");
    });

    $('#next').click(function (event) {
        event.preventDefault();
        $('#content').animate({
            scrollLeft: "+=775px"
        }, "slow");
    });
});