var menu = 0;
$(".open_menu").click(function(event){
  if(menu == 0){
    $(".header_menu").css("width","100%");
    $(".span1").css("transform", "rotate(45deg)");
    $(".span3").css("transform", "rotate(-45deg)");
    $(".span1").css("top", "9px");
    $(".span3").css("bottom", "8px");
    $(".span2").hide()
    menu = 1;
  }
  else{
    $(".header_menu").css("width","0")
    $(".span2").show()
    $(".span3").css("transform", "rotate(0)");
    $(".span1").css("top", "0px");
    $(".span3").css("bottom", "0px");
    $(".span1").css("transform", "rotate(0)")
    menu = 0;
  }
})
var filter = 0;
$(".open_fliter,.open_search_filter").click(function(){
  if(filter==0){
    $(".main_cont_top_filter_bllok").slideDown(500);
    $(".open_fliter").addClass("filter_activ");
    filter = 1;
  }
  else{
    $(".main_cont_top_filter_bllok").slideUp(500);
    $(".open_fliter").removeClass("filter_activ");
    filter = 0;
  }
})
$(".user_page_flex_right_central_item").click(function(){
  $(this).toggleClass("user_page_flex_right_central_item_activ");
  $(this).children(".user_page_flex_right_central_item_hide").slideToggle(500);
})
$(".opros_btn").click(function(){
  $(this).toggleClass("opros_btn_aktive")
  $(".apros_modal").show()
})
$(".clous_aopros_modal").click(function(){
  $(".apros_modal").hide()
})
$(".save_open").click(function(){
  $(".chast_modal").show()
})
$(".clous_chast_modal").click(function(){
  $(".chast_modal").hide()
})
$(".show_map_filter").click(function(){
  $(".show_map_filter").hide()
  $(".map_filter").slideDown(500)
})
$(".clous_map_filter").click(function(){
  $(".map_filter").slideUp(500)
  $(".show_map_filter").show()
})
$(".show_list").click(function(){
  $(".map_cont_left_hide1").slideDown(500)
  $(".map_cont_left_hide2").slideUp(500)
  $(".map_cont_right").addClass("map_cont_right_mini")
})

$(".clous_left_hide").click(function(){
  $(".map_cont_left_hide").slideUp(500);
  $(".map_cont_right").removeClass("map_cont_right_mini")
})
$(".show_result555").click(function(){
  $(".user_page_flex_right_central_hide").slideToggle(500)
})
$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: '<button></button>',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
  nextText: '<button></button>',
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);
$(function(){
	$("#datepicker").datepicker();
});
var map = 0
$(".all_window_btn").click(function(){
  if(map==0){
    $(".map_all").addClass("map_all_activ");
    $(".map_block").addClass("map_all_activ");
    $(".map_cont").css("position","unset")
    $(".map_block").css("position","unset")
    $(this).addClass("all_window_btn_activ")
    map=1
  }
  else{
    $(".map_all").removeClass("map_all_activ")
    $(".map_block").removeClass("map_all_activ")
    $(".map_cont").css("position","relative")
    $(".map_block").css("position","relative")
    $(this).removeClass("all_window_btn_activ")
    map=0
  }
})
$(".open_mobile_left").click(function(){
  if($(window).width()<1060){
    $(".map_cont_left").slideDown(500)
  }
})
$(".clous_map_left").click(function(){
  if($(window).width()<1060){
    $(".map_cont_left").slideUp(500)
  }
})
function initMap() {
  const myLatLng = { lat: -25.363, lng: 131.044 };
  const myLatLng2 = { lat: -22.363, lng: 101.044 };
  const myLatLng3 = { lat: -10.363, lng: 80.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });
  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    icon: "img/Group944.svg"
  });
  const marker2 = new google.maps.Marker({
    position: myLatLng2,
    map,
    icon: "img/Group989.svg"
  });
  const marker3 = new google.maps.Marker({
    position: myLatLng3,
    map,
    icon: "img/Group983.svg"
  });
  map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.panTo(marker.getPosition());
    }, 3000);
  });
  marker.addListener("click", () => {
    $(".map_cont_left_hide2").slideDown(500)
    $(".map_cont_left_hide1").slideUp(500)
    $(".map_cont_right").addClass("map_cont_right_mini")
  });
  marker3.addListener("click", () => {
    $(".map_cont_left_hide2").slideDown(500)
    $(".map_cont_left_hide1").slideUp(500)
    $(".map_cont_right").addClass("map_cont_right_mini")
  });
  marker2.addListener("click", () => {
    $(".map_cont_left_hide2").slideDown(500)
    $(".map_cont_left_hide1").slideUp(500)
    $(".map_cont_right").addClass("map_cont_right_mini")
  });
}
$('.timepicker').timepicker({
  timeFormat: 'HH:mm',
  interval: 60,
  minTime: '01',
  maxTime: '12:00',
  startTime: '10:0',
  dynamic: true,
  dropdown: true,
  scrollbar: true
});