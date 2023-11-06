var swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: false,
  slidesPerView: "auto",
  spaceBetween: 20,
  speed: 1000,
  freeMode: true,
  autoplay: {
    delay: 0,
    waitForTransition: true,
  },
});
new WOW().init();
setTimeout(function () {
  $(".logojs").css("opacity", "1")
}, 2000)
setTimeout(function () {
  $(".logojs").css("opacity", "0")
  $(".jsanimationcustom_box").css("width", "0")
  $(".page_wrap").css("margin", "0")
}, 4000)
setTimeout(function () {
  $(".jsanimationcustom").css("z-index", "-1");
}, 5000)
setTimeout(function () {
  $(".main_cont_text_top h1").addClass(" animate__ animate__fadeInLeft wow animated")
  $(".main_cont_text_top p").addClass(" animate__ animate__fadeInLeft wow animated")
}, 4000)
var menu = 0;
$(".openmenu").click(function (event) {
  if (menu == 0) {
    $(".header_cont_nav").css("width", "100%")
    $(".header_cont_nav").css("left", "0")
    $(".openmenu").css("background-image", "url(../../img/close.svg)")
    menu = 1
  } else {
    $(".header_cont_nav").css("width", "0")
    $(".header_cont_nav").css("left", "-500px")
    $(".openmenu").css("background-image", "url(../../img/menuascf.svg)")
    menu = 0
  }
  event.stopPropagation()
  $("body").click(function () {
    $(".header_cont_nav").css("width", "0")
    $(".header_cont_nav").css("left", "-500px")
    $(".openmenu").css("background-image", "url(../../img/menuascf.svg)")
    menu = 0
  })
})
$(".cuantminus").click(function () {
  if ($(this).siblings("input").val() > 1) {
    $(this).siblings("input").val(+$(this).siblings("input").val() - 1)
  }
})
$(".cuantplus").click(function () {
  $(this).siblings("input").val(+$(this).siblings("input").val() + 1)
})
var obasket = 0;
$(".showbasket").click(function () {
  $(".basket_js").slideToggle(500)
  if (obasket == 0) {
    $(".showbasket").text("Свернуть итог")
    obasket = 1
  } else {
    $(".showbasket").text("Развернуть итог")
    obasket = 0
  }
})
$(".link").on('click', function () {
  let name = $(this).attr('data-name')
  $('html, body').animate({
    scrollTop: $(name).position().top
  }, 500);
});
$(".otzivbtn").click(function () {
  $(".otzivtext").text($(this).attr('data-name'))
})
$('.js-tilt').tilt({
  reset: false,
  perspective: 1000,
})
$(".clousbtn").click(function () {
  $(".basketslide").slideUp(500)
})
$(".openbasket").click(function () {
  $(".basketslide").slideDown(500)
})
// $(window).scroll(function(){
//   var st = $(window).scrollTop();
//   console.log(st)
//   if(st>=4200){
//     $(".typesofhoney").css("overflow","hidden")
//   }
//   else{
//     $(".typesofhoney").css("overflow","unset")
//   }
// })
