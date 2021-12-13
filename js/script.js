$( document ).ready(function(){


/*~~~~~~~~~~~~~~start header~~~~~~~~~~~~~~~~ */
  if ($(window).width() <= 767 ){

    $(".bars_").click(function(){
      $("nav").toggle("500");
      $(".moboverlay").fadeIn("500");
      $("body").addClass("500");
    });

    $(".close_").click(function(){
      $("nav").toggle("500");
      $(".moboverlay").hide("500");
      $("body").removeClass("500");
    });

    $(".moboverlay").click(function(){
      $("nav").hide("500");
      $(".moboverlay").hide("500");
      $("body").removeClass("500");
    });
  }

  /*~~~~~~~~~~~~~~end header~~~~~~~~~~~~~~~~ */

  /*~~~~~~~~~~~~~~start slider~~~~~~~~~~~~~~~~ */
  $('.slider .owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    // autoplay:true,
    rtl:true,
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
  /*~~~~~~~~~~~~~~end slider~~~~~~~~~~~~~~~~ */
  /*~~~~~~~~~~~~~~~~~start counter~~~~~~~~~~~~~ */
  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 20000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
    });  
  });
  /*~~~~~~~~~~~~~~~~~end counter~~~~~~~~~~~~~ */

  /*~~~~~~~~~~~~~~~~~start news~~~~~~~~~~~~~~ */
  $('.news .owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    margin: 30,
    // autoplay:true,
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  })
  /*~~~~~~~~~~~~~~~~~end news~~~~~~~~~~~~~~ */
  
  $('.team .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    rtl:true,
    responsive:{
        0:{
    margin:15,
            items:2,
            margin:15,
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
}) 

// ~~~~~~~~~~btn_up~~~~~~~~~~~~~~
$(window).scroll(function(){
  if ($(this).scrollTop() > 500) {
      $('.btn_up').fadeIn();
  } else {
      $('.btn_up').fadeOut();
  }
});

$('.btn_up').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
});
});



$(window).on("load",function() {
  $(".pop_up_parant").fadeIn('500')
  $(".moboverlay").fadeIn("500");

});
$(".linear_").on("click",function(){
  $(".moboverlay").fadeOut("500");
  $(".pop_up_parant").hide('500')

})
$(".moboverlay").on("click",function(){
  $(".moboverlay").fadeOut("500");
  $(".pop_up_parant").hide('500')

})






