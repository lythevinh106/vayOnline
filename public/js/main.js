

$(document).ready(function () {
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true,
            offset: 70,     // default
        }
    )
    wow.init();







    $('.collapse-extra').on('show.bs.collapse', event => {

        let collapse_plus = $(event.target).parent(".nav-item ").find(".my-collapse-icon .plus");
        let collapse_minius = $(event.target).parent(".nav-item ").find(".my-collapse-icon .minius");

        // collapse_plus.addClass("animate__rotateOut")


        setTimeout(() => {
            collapse_plus.css({
                "display": "none"
            })

            collapse_minius.css({
                "display": "block"
            })
            // collapse_minius.addClass("animate__rotateIn")
        }, 0)



    });
    $('.collapse-extra').on('hide.bs.collapse', event => {

        let collapse_plus = $(event.target).parent(".nav-item ").find(".my-collapse-icon .plus");
        let collapse_minius = $(event.target).parent(".nav-item ").find(".my-collapse-icon .minius");

        // collapse_minius.addClass("animate__rotateOut");
        setTimeout(() => {
            collapse_plus.css({
                "display": "block"
            })
            // collapse_plus.addClass("animate__rotateIn")
            collapse_minius.css({
                "display": "none"
            })
        }
            , 0)

    });








    // my - bg - gallery
    // gallery - item active

    $(".gallery-item").click(function () {


        $(this).parents(".my-list-gallery").find(".gallery-item").each(function (index, val) {

            console.log($(val));
            $(val).removeClass("active");

        })


        $(this).parents(".my-gallery").find(".my-big-gallery").attr("src", $(this).attr("src"));


        $(this).addClass("active");
    })










    $('#carousel4').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,


        responsive: {
            0: {
                items: 2,
                margin: 20,
                nav: false,

            },

            767: {
                items: 3,
                margin: 20,
                nav: false,

            },
            1024: {
                items: 4,
                margin: 20,
                nav: true,


            },


        }
    })


    $('#carousel2').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,


        responsive: {
            0: {
                items: 3,
                margin: 20,
                nav: false,
            },

            767: {
                items: 5,
                margin: 20,
                nav: false,
            },
            1024: {
                items: 6,
                margin: 20,
                nav: false,
                loop: false
            },


        }
    })






    if ($(window).width() < 767) {
        $('#carousel3').addClass("owl-carousel owl-theme");


        $('#carousel3').owlCarousel({
            loop: true,

            nav: false,
            dots: false,
            margin: 0,
            autoplay: true,
            // autoWidth: true,




            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    nav: false,
                },




            }

        }
        )
    }

    else {
        $('#carousel3').addClass("d-flex");
        $('#carousel3').removeClass("owl-carousel owl-theme");


    }




    if ($(window).width() < 1024) {


        $(".sub-filter").addClass("collapse");


        $('#carousel1').addClass("owl-carousel owl-theme");
        $('#carousel1').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,


            responsive: {
                0: {
                    items: 3,
                    margin: 0,
                    nav: false,
                },

                767: {
                    items: 5,
                    margin: 10,
                    nav: false,
                },


            }
        })

    }
    else {
        $(".sub-filter").removeClass("collapse");
        $('#carousel1').removeClass("owl-carousel owl-theme ");


    }

















    $(".scroll-top").click(function () {



        $("html, body").animate({
            scrollTop: 0
        }, 100);



        return false;
    })







    $(".product .nav-tabs button").click(function (index, val) {

        let pos_left_btn = $(this).offset().left;
        $(".product .nav-tabs").animate({
            scrollLeft: pos_left_btn - 50
        }, 500, "swing")

        // console.log(pos_left_btn);


    })



    $(window).scroll((e) => {

        let pos_body = $(" html,body").scrollTop();
        let header_body = $(".header").outerHeight();




        //     if (pos_body >= header_body) {
        //         $(".header").addClass("sticky")
        //     }
        //     else {
        //         $(".header").removeClass("sticky")
        //     }




        if (pos_body >= 1200) {
            $(".scroll-top").slideDown()
        }
        else {
            $(".scroll-top").slideUp()
        }










    });
})
