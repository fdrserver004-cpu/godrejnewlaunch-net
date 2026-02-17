
// animation affect in aos -------------------------------------------------------------------------------->

// slick slider -------------------------------------------------------------------------------->



$(document).ready(function () {
  $('.banner_img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

});




// slick slider ----------------------------------------------------------------------------->


$(document).ready(function(){
  $('#exampleModal').modal('show');
}); 



// header responsive toggle class jquery start-------------------------------------------------------------------------------->

$(document).ready(function () {
  $('.hamberger').click(function () {
    $(".menu").toggleClass("active");
  });
});

// header responsive toggle class jquery end-------------------------------------------------------------------------------- >




// header sticky start------------------------------------------------------------------------>

const header = document.querySelector(".header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});





// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});


function closeForm() {
  $('.form-popup-bg').removeClass('is-visible');
}

$(document).ready(function($) {
  
  /* Contact Form Interactions */
  $('.btnOpenForm').on('click', function(event) {
    event.preventDefault();

    $('.form-popup-bg').addClass('is-visible');
  });
  
    //close popup when clicking x or off popup
  $('.form-popup-bg').on('click', function(event) {
    if ($(event.target).is('.form-popup-bg') || $(event.target).is('.btnCloseForm')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  
  
  
  });


  

// scrool btn start


$(function(){

  //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.go-top').fadeIn('slow');
    if (scrolled < 200) $('.go-top').fadeOut('slow');
  });
  
  //Click event
  $('.go-top').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
  });

});
