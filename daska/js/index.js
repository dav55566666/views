var menu = 0;
$(".open_mobile_menu").click(function(event){
  if(menu == 0){
    $(".header_menu").slideDown(500);
    $(".span1").css("transform", "rotate(45deg)");
    $(".span3").css("transform", "rotate(-45deg)");
    $(".span1").css("top", "-2px");
    $(".span3").css("bottom", "8px");
    $(".span2").hide()
    menu = 1;
  }
  else{
    $(".header_menu").slideUp(500)
    $(".span2").show()
    $(".span3").css("transform", "rotate(0)");
    $(".span1").css("top", "0px");
    $(".span3").css("bottom", "0px");
    $(".span1").css("transform", "rotate(0)")
    menu = 0;
  }
})
$(".main_cont_text").css("left","0")
$(".main_cont_img").css("right","0")
$(".phone_1").mask("+7 (999) 999-99-99")
$(".clous_modal").click(function(){
  $(".cal_back_modal").hide()
})
$(".open_main_popap").click(function(){
  $(".cal_back_modal").show()
})
$(".scrolllink").click(function(){
  $('html, body').animate({
     scrollTop:$("."+$(this).data("src")+"").position().top
   }, 500);
});
var swiper = new Swiper(".main_swiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3,
    disableOnInteraction: false
  },
  speed: 3000,
});
$(".phonemodalicon").click(function(){
  $(".phonemodal").addClass("activmodal")
  $(".mailmodal").removeClass("activmailmodal")
})
$(".basket").click(function(){
  $(".bascetmodal").css("width","100%")
})
$(".clousmodal").click(function(){
  $(".bascetmodal").css("width","0")
  $(".phonemodal").removeClass("activmodal")
  $(".mailmodal").removeClass("activmailmodal")
})
$(".mailmodalicon ").click(function(){
  $(".phonemodal").removeClass("activmodal")
  $(".mailmodal").addClass("activmailmodal")
})
