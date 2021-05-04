$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    $(window).on("scroll load resize", function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        // var $this = $(this),
        //     blockId = $this.data('scroll'),
        //     blockOffset = $(blockId).offset().top;

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset
        }, 700);
    });

    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");

    });

    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        /*$this.toggleClass("active");*/
        $(blockId).slideToggle();
    });

});