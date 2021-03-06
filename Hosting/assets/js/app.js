$(function() {

    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    $(window).on("scroll load resize", function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        console.log(introH)

        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {

        event.preventDefault();

        let elementId = $(this).data("scroll")
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");



        $("html, body").animate({
            scrollTop: elementOffset +1
        }, 700);

    });

    /* Nav Toggle */


    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");

    });

    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slideToShow: 1,
        slideToScroll: 1
    })

});