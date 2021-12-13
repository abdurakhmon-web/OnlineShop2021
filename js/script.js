$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
    } else {
        $('.scroll-top').fadeOut();
    }
});
$('.scroll-top').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

// Initialise Carousel
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,
  });
  
  // Thumbnails
  const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
    Sync: {
      target: mainCarousel,
      friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: true,
    slidesPerPage: 1,
    infinite: false,
  });
  
  // Customize Fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {
    Carousel: {
      on: {
        change: (that) => {
          mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
            friction: 0,
          });
        },
      },
    },
  });

/* var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
} */