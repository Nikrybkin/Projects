$(function() {

    /* Fixed Header */ 
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav")
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {

        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH) {
            header.addClass("fixed");
        }   else {
            header.removeClass("fixed");
        }
    }

    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show")

        console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset - 50
        }, 700);
    });

    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    /* Tab */
    const tabsBtn = document.querySelectorAll(".column-1");
    const tabsItem = document.querySelectorAll(".tab__suptitle")

    tabsBtn.forEach(onTabClick);

    function onTabClick(item) {
        item.addEventListener("click", function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab"); 
            let currentTab = document.querySelector(tabId);

            if( ! currentBtn.classList.contains('active') ) {
                tabsBtn.forEach(function(item) {
                    item.classList.remove('active');
                });

                tabsItem.forEach(function(item) {
                    item.classList.remove('active');
                });

                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }

            
        });
    }    
            
    document.querySelector('.column-1').click();   

    /* What */
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: "unslick"
            }
        ]
      });

    

});