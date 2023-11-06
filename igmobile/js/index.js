var banner_slide=$(".main_bg");
var banner_src=["Banner","Banner2"]
for(var i=0; i<=banner_src.length;i++){
  $(banner_slide[i]).css("background-image","url('img/"+banner_src[i]+".jpg')")
}
var set_banner=0;
var set_banner_helper=1;
setInterval(function(){
  if(set_banner<=banner_slide.length){
    set_banner++;
  }
  $(banner_slide).css("width","0");
  $(banner_slide[set_banner_helper-1]).css("width","100%")
  $(banner_slide[set_banner]).css("width","100%")
  if(set_banner==banner_slide.length){
    set_banner=0;
  }
},3000);
var selector = document.getElementById("date");
var im = new Inputmask("99-9999999");
im.mask(selector);
var catalog_menu = 0;
$(".burger_menu_catalog").click(function(event){
  if(catalog_menu==0){
    $(".catalog_menu_ul").slideDown(500);

    catalog_menu=1;
  }
  else{
    $(".catalog_menu_ul").slideUp(500);
    catalog_menu=0;
  }
  event.stopPropagation()
});
var seacrch_pokaz = 0;
$(".search_form input").click(function(event){
  event.stopPropagation();
})
$(".search_button").click(function(event){

  if(seacrch_pokaz==0){
    $(".search_form").slideDown(500);
    seacrch_pokaz=1;
    $(".search_button .fa").removeClass("fa-search")
    $(".search_button .fa").addClass("fa-times")
  }
  else{
    $(".search_form").slideUp(500);
    $(".search_button .fa").addClass("fa-search")
    $(".search_button .fa").removeClass("fa-times")
    seacrch_pokaz=0;
  }
    event.stopPropagation();
  $("body").click(function(){
    $(".search_form").slideUp(500);
    $(".search_button .fa").addClass("fa-search")
    $(".search_button .fa").removeClass("fa-times")
    seacrch_pokaz=0;
  });
});
var note = 0;
var pk = 5;
var phone = 0;
var ipad = 0;
var pk_helper=0;
var sctolltop = 0;
var y=0
var payman = 0;
$(window).scroll(function(){
  y = window.scrollY
  if($(window).width()>=880){
  payman= y>=700;
}
if($(window).width()<=690) {
  payman= y>=400;
}
if(payman){
  setInterval(function(){
      if(note<=8999){
        note+=10
        $(".note_umber").remove();
        $(".num_note").append("<p class='note_umber'>"+note+"</p>");
      }

  },0.8);
  setInterval(function(){
      if(phone<=6999){
        phone+=10
        $(".phone_umber").remove();
        $(".num_phone").append("<p class='phone_umber'>"+phone+"</p>");
      }

  },0.8);
  setInterval(function(){
      if(ipad<=13999){
        ipad+=10
        $(".ipad_umber").remove();
        $(".num_ipad").append("<p class='ipad_umber'>"+ipad+"</p>");
      }

  },0.8);
  setInterval(function(){
      if(pk<=31){
        pk_helper+=10
        if(pk_helper==1000){
          pk+=1
          pk_helper=000
        }
        if(pk==32){
          pk_helper="000"
        }
        $(".pk_umber").remove();
        $(".num_pk").append("<p class='pk_umber'>"+pk+"."+pk_helper+"</p>");

      }

  },0.8);
}
});
  $(".zayav_bg").hide()
$(".phone_problem").click(function(){
  $(".problem_text").slideDown(300);
});
$(".isprav_data").click(function(){
  $(".isprav_data input").slideDown(300);
});
$(".zayav_send").click(function(){
  $(".isprav_data input").slideUp();
  $(".problem_text").slideUp();
  $(".zayav_bg").hide()
})
$(".first_ol").hide();
$(".call_back,.open_zayav_form").click(function(){
  $(".zayav_bg").show()
  document.documentElement.scrollTop = 0
})
var first_ul=0
if($(window).width()>1024){
  $(".first_ol").addClass("first_ol_hover")
}
if($(window).width()<1024){
$(".catalog_menu_ul li").click(function(event){
  if(first_ul==0){
    $(".first_ol").hide();
    $(this).children(".first_ol").slideDown();
    first_ul=1
  }
  else{
    $(".first_ol").slideUp();
    first_ul=0
  }
  event.stopPropagation()
  $("body").click(function(){
    $(".first_ol").hide();
    first_ul=0
  })
});
}
var tp = 0;
var top_helper = 0;
var spiner = 0;
var bonus_img=["Group 4","Group 5","Group 6","Group 7","Group 8","Group 4","Group 5","Group 6","Group 7","Group 8"];
var next_bon=0;
var rand= Math.floor((Math.random() * 10) + 1);
$(".send_bon").click(function(){
  $(".arrow").hide();
  $(".item_bonus").show();
  $(".send_bon p").remove();
  $(".send_bon").append("<p>получить подарок</p>");
  next_bon+=1
  if(next_bon>=2){
    $(".bonus_form_blok").show()
  }
var spiner_inet = setInterval(function(event){
  if(top_helper==0){
    if(tp <= 1000){
      tp+=10;
      $(".item_bonus").css("top",-tp)
    }
  }
  if(tp==1000){
    top_helper=1;
    spiner+=1;
  }

  if(tp==0){
    top_helper=0;
  }
  if(top_helper==1){
    if(tp>0){
      tp-=10
      $(".item_bonus").css("top",-tp)
    }
  }
  if(spiner==3){
    $(".item_bonus img").hide();
    $(".item_bonus").css("top","0");
    $(".item_bonus").append("<img src='img/"+bonus_img[rand-1]+".png' class='for_bonus'>")
    clearInterval(spiner_inet)
  }
  },0.01);
});
$(".zayazv_cont,.bonus_form").click(function(event){
  event.stopPropagation()
})
$(".zayav_bg,.clousismenu").click(function(){
  $(".zayav_bg").hide()
});
$(".giv_me_bonus,.bonus_form_blok").click(function(){
  $(".bonus_form_blok").hide()
});
var li_hover=0
$(".uslug").hide();
$(".uslug").click(function(event){
  event.stopPropagation()
});
var remont=0;
$(".remont_item").click(function(event){
  if(remont==0){
    $(this).children(".uslug").slideDown(500);
    $(this).children(".slide_up_down").css("transform","rotate(0deg)")
    remont=1
  }
  else{
    $(".uslug").slideUp(500);
    $(".slide_up_down").css("transform","rotate(180deg)")
    remont=0
  }
})
