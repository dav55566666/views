var page_tiv = 0;
var button_number=-1;
var otziv_page=$(".page_blok_clas")
for(page_tiv = 0; page_tiv<=otziv_page.length; page_tiv++){
  button_number+=1
  if(page_tiv<=0){
    $(".numbers_pages_block").hide()

  }
  else{
    $(".numbers_pages_block").show()
    $(".numpages").append("<button value="+button_number+" class='ej_tiv'>"+button_number +"</button>")
  }

}
var ej_tiv=$(".ej_tiv");
if(button_number>=4){
  $(ej_tiv).hide()
  $(ej_tiv[0]).show()
  $(ej_tiv[1]).show()
  $(ej_tiv[2]).show()
  $(".numpages").append("<span clas='span_ket'>...</span>")
  for(var i=0; i<ej_tiv.length;i++){

  }
  $(".numpages").append("<button value="+button_number+" class='ej_tiv end_button'>"+i +"</button>")
}
var button_val=0;
$(".first_but").hide()
$(".first_but").click(function(){
  $(otziv_page).hide();
  $(otziv_page[0]).show();
  $(ej_tiv).hide()
  $(ej_tiv[0]).show()
  $(ej_tiv[1]).show()
  $(ej_tiv[2]).show()
  page_num=0
  $(".numpages span").show()
  $(".end_button").show()
  $(".first_but").hide()
  $(".ej_tiv").removeClass("is_activ_button")
  $(ej_tiv[0]).addClass("is_activ_button")
});
$(ej_tiv[0]).addClass("is_activ_button")
$(".ej_tiv").click(function(){
  button_val=$(this).val()
  $(".ej_tiv").removeClass("is_activ_button")
  $(this).addClass("is_activ_button")
  $(otziv_page).hide();
  $(otziv_page[button_val-1]).show();
  $(ej_tiv).hide()
  page_num=button_val-1
  $(ej_tiv[button_val-1]).show()
  $(ej_tiv[button_val]).show()
  button_val++
  $(ej_tiv[button_val]).show()
  button_val++
  if(button_val>=i){
    $(".numpages span").hide()
    $(".end_button").hide()
    $(".first_but").show()
  }

  console.log(page_num)
})

$(otziv_page).hide();
$(otziv_page[0]).show();
var page_num =0;
$(".next_page").click(function(){
  if(page_num<=page_tiv-3){
    page_num+=1
  }
  $(".ej_tiv").removeClass("is_activ_button")
  $(ej_tiv[page_num]).addClass("is_activ_button")
  $(otziv_page).hide();
  $(otziv_page[page_num]).show();
  $(ej_tiv).hide()
  $(ej_tiv[page_num]).show()
  $(ej_tiv[page_num+1]).show()
  $(ej_tiv[page_num+2]).show()
  if(page_num+2>=i){
    $(".numpages span").hide()
    $(".end_button").hide()
    $(".first_but").show()
  }
  console.log(page_num)
});
$(".prev_page").click(function(){
  if(page_num>=1){
    page_num-=1
  }
  $(".ej_tiv").removeClass("is_activ_button")
  $(ej_tiv[page_num]).addClass("is_activ_button")
  $(otziv_page).hide();
  $(otziv_page[page_num]).show();
  console.log(page_tiv)
  $(ej_tiv).hide()
  $(ej_tiv[page_num]).show()
  $(ej_tiv[page_num+1]).show()
  $(ej_tiv[page_num+2]).show()
  if(page_num+2<=i){
    $(".numpages span").show()
    $(".end_button").show()
    $(".first_but").hide()
  }
});
