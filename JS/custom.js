/*JS Document */

/*************************
Slider
**************************/
$('.home_slider_owl .owl-carousel').owlCarousel({
    navigation : true,
    singleItem : true,
    animateOut: 'fadeOut',
    dots:false,
    loop:true,
    nav:true,
    items:1,
    autoplay:true
})
$('.test_slider_container .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



