/*JS Document */

/*************************
Slider
**************************/
var myobj = document.getElementById("top-bar");


$(window).scroll(function(e){
    var vitri=$('body,html').scrollTop()
    if(vitri>=100)
    {
      
        myobj.remove();
    }
    else{
      $('super_container').myobj.add();
        }
  })
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
$('#owl_tesimonials').owlCarousel({
    loop:true,
    dots:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.Hotels .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
$('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });



