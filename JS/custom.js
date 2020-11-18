/*JS Document */

/*************************
Slider
**************************/



$(window).scroll(function(e){
    var vitri=$('body,html').scrollTop()
    
    if(vitri>=500)
    {
        $(".top-bar").css({
            "opacity":"0",
            "transition": "1s",
            "height":"0px"
            
        });
        $(".nav-menu-header").css({
            "padding": "1.5em",
            "background": "rgba(49, 18, 75, 0.8)",
            "transition": "1.5s"
            
        })
        
       
    }
    else{
        $(".top-bar").css({
            "display": "block",
             "opacity":"1",
            "transition": "1s",
            "height": "38px"
        });
        $(".nav-menu-header").css({
            "padding": "2.5rem 1rem",
             "background": "#00000040",
             "transition": "1.5s", 
              "z-index":"13"
                     })

    }
    
   
   
})





//slider//
$('.home_slider_owl .owl-carousel').owlCarousel({
    navigation : true,
    singleItem : true,
    animateOut: 'fadeOut',
    dots:false,
    loop:true,
    nav:true,
    items:1,
    autoplay:false
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

//Text-svg//

var cdtimeline = anime.timeline();



cdtimeline.add({
    targets:'.text_svg g path',
    strokeDashoffset:[anime.setDashoffset,0],
    duration:2000,
  
    easing:'easeOutSine',
    direction:'alternate',
    loop:true
})
jQuery(document).ready(function($) {
    $('.counter-count').counterUp({
        delay: 10,
        time: 1000
    });
});








