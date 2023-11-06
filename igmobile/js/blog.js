
var page_tiv1 = 0;
var button_number1=-1;
var otziv_page1=$(".page_blok_class")
$(".page_blok_class").hide()
$(otziv_page1).hide()
$(otziv_page1[0]).show()
for(page_tiv1 = 0; page_tiv1<=otziv_page1.length; page_tiv1++){
  button_number1+=1
  if(page_tiv1<=0){
    $(".numbers_pages_block").hide()

  }
  else{
    $(".numbers_pages_block").show()
    $(".numpages").append("<button value="+button_number1+" class='ej_tiv'>"+button_number1 +"</button>")
  }

}
var ej_tiv1=$(".ej_tiv");
if(button_number1>=4){
  $(ej_tiv1).hide()
  $(ej_tiv1[0]).show()
  $(ej_tiv1[1]).show()
  $(ej_tiv1[2]).show()
  $(".numpages").append("<span clas='span_ket'>...</span>")
  for(var i=0; i<ej_tiv1.length;i++){

  }
  $(".numpages").append("<button value="+button_number1+" class='ej_tiv end_button'>"+i +"</button>")
}
var button_val1=0;
$(".first_but").hide()
$(".first_but").click(function(){
  $(otziv_page1).hide();
  $(otziv_page1[0]).show();
  $(ej_tiv1).hide()
  $(ej_tiv1[0]).show()
  $(ej_tiv1[1]).show()
  $(ej_tiv1[2]).show()
  page_num1=0
  $(".numpages span").show()
  $(".end_button").show()
  $(".first_but").hide()
  $(".ej_tiv").removeClass("is_activ_button")
  $(ej_tiv1[0]).addClass("is_activ_button")
  $(".item_hide").hide()
  $(".slidedown").show()
});
$(ej_tiv1[0]).addClass("is_activ_button")
$(".ej_tiv").click(function(){
  button_val1=$(this).val()
  $(".ej_tiv").removeClass("is_activ_button")
  $(this).addClass("is_activ_button")
  $(otziv_page1).hide();
  $(otziv_page1[button_val1-1]).show();
  $(ej_tiv1).hide()
  page_num1=button_val1-1
  $(ej_tiv1[button_val1-1]).show()
  $(ej_tiv1[button_val1]).show()
  button_val1++
  $(ej_tiv1[button_val1]).show()
  button_val1++
  if(button_val1>=i){
    $(".numpages span").hide()
    $(".end_button").hide()
    $(".first_but").show()
  }
  $(".item_hide").hide()
  $(".slidedown").show()
})
$(otziv_page1).hide();
$(otziv_page1[0]).show();
var page_num1 =0;
$(".next_page").click(function(){
  if(page_num1<=page_tiv1-3){
    page_num1+=1
  }
  $(".ej_tiv").removeClass("is_activ_button")
  $(ej_tiv1[page_num1]).addClass("is_activ_button")
  $(otziv_page1).hide();
  $(otziv_page1[page_num1]).show();
  $(ej_tiv1).hide()
  $(ej_tiv1[page_num1]).show()
  $(ej_tiv1[page_num1+1]).show()
  $(ej_tiv1[page_num1+2]).show()
  if(page_num1+2>=i){
    $(".numpages span").hide()
    $(".end_button").hide()
    $(".first_but").show()
  }
  $(".item_hide").hide()
  $(".slidedown").show()
});
$(".prev_page").click(function(){
  if(page_num1>=1){
    page_num1-=1
  }
  $(".ej_tiv").removeClass("is_activ_button")
  $(ej_tiv1[page_num1]).addClass("is_activ_button")
  $(otziv_page1).hide();
  $(otziv_page1[page_num1]).show();
  $(ej_tiv1).hide()
  $(ej_tiv1[page_num1]).show()
  $(ej_tiv1[page_num1+1]).show()
  $(ej_tiv1[page_num1+2]).show()
  if(page_num1+2<=i){
    $(".numpages span").show()
    $(".end_button").show()
    $(".first_but").hide()
  }
  $(".item_hide").hide()
  $(".slidedown").show()
});
var sliderdown_but=$(".slidedown");
$(".item_hide").hide()
$(".slidedown").click(function(){
  if($(this).val()==0){
    $(".item_hide").hide()
    $(".slidedown").show()
    $(".item_hide1").slideDown(500);
    $(sliderdown_but[0]).hide()
  }
  if($(this).val()==1){
    $(".item_hide").hide()
    $(".item_hide2").slideDown(500);
    $(".slidedown").show()
    $(sliderdown_but[1]).hide()
  }
})
$(".slideup").click(function(){
  if($(this).val()==0){
    $(".item_hide1").slideUp(500);
    $(sliderdown_but[0]).show()
  }
  if($(this).val()==1){
    $(".item_hide2").slideUp(500);
    $(sliderdown_but[1]).hide()
  }
})
