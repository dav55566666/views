$(window).on("scroll", function() {
    	$('.intro_img g path').css(`transform`, `translateX(-${$(window).scrollTop()}px)`)
});


$('.jardacMouseOver').mouseenter(function() {
	let id = '#' + $(this).attr('data-id')
	$(id).fadeIn(200)
	$('.state_right .overlay').fadeIn(200)
})


$('.jardacMouseOver').mouseleave(function() {
	let id = '#' + $(this).attr('data-id')
	$(id).css('display', 'none')
	$('.state_right .overlay').css('display', 'none')
})


$('.questions_item').on('click', function() {
	$(this).toggleClass('active')
	$(this).children('.questions_item_text').slideToggle();
})

$('.list_puncts').mouseenter(function() {
	$('.list_puncts').removeClass('active')
	$(this).addClass('active')
	let id = '#' + $(this).attr('data-id')
	if ($(window).width() <= 652) {
		id = id + "-MOB"
	}
	$('.puncts_list').css('display', 'none')
	$(id).fadeIn(200)
	$(id).css('display', 'flex')
})
$('.list_puncts').mouseleave(function() {
	$('.list_puncts').removeClass('active')
  $('.puncts_list').css('display', 'none')
})
let id = '#' + $('.list_puncts.active').attr('data-id')
if ($(window).width() <= 652) {
	id = '#' + $('.list_puncts.active').attr('data-id') + '-MOB'
}
$(id).css('display', 'flex')




$('.img_puncts').mouseenter(function() {
  $('.img_puncts').removeClass('active')
  $('.img_puncts_text').css('display', 'none')
	$(this).addClass('active')
	let id = '.puncts_right #' + $(this).attr('data-id')
	$(id).fadeIn(200)
})
$('.img_puncts').mouseleave(function() {
	$('.img_puncts').removeClass('active')
  $('.img_puncts_text').css('display', 'none')
})
let id2 = '#' + $('.img_puncts.active').attr('data-id')
$(id2).css('display', 'block')




$('.vision_item').mouseenter(function() {
	$('.vision_item').removeClass('active')
	$(this).addClass('active')
})

$('.vision_item').mouseleave(function() {
	$('.vision_item').removeClass('active')
})




function initStandart(prod) {
	if ($(prod).css('display') == 'none') {
		return 0
	}
	let size = $(prod).children('.size_block').children('.select').children('.value').html()
	let count = +$(prod).children('.cound_block').children('.input').children('.number').attr('data-count')
	let rotation = $(prod).children('.week_block').children('.select').children('.value').html()



	if (size == '60x85' && rotation == '1 / 2 weeks') {
		return count * 430
	}
	else if (size == '60x85' && rotation == 'Once per week') {
		return count * 740
	}
	else if (size == '60x85' && rotation == 'Twice per week') {
		return count * 930
	}



	else if (size == '85x150' && rotation == '1 / 2 weeks') {
		return count * 1280
	}
	else if (size == '85x150' && rotation == 'Once per week') {
		return count * 1860
	}
	else if (size == '85x150' && rotation == 'Twice per week') {
		return count * 2330
	}



	else if (size == '115x240' && rotation == '1 / 2 weeks') {
		return count * 2770
	}
	else if (size == '115x240' && rotation == 'Once per week') {
		return count * 4030
	}
	else if (size == '115x240' && rotation == 'Twice per week') {
		return count * 5050
	}




	else if (size == '150x240' && rotation == '1 / 2 weeks') {
		return count * 3620
	}
	else if (size == '150x240' && rotation == 'Once per week') {
		return count * 5270
	}
	else if (size == '150x240' && rotation == 'Twice per week') {
		return count * 6580
	}



	else if (size == '115x400' && rotation == '1 / 2 weeks') {
		return count * 4620
	}
	else if (size == '115x400' && rotation == 'Once per week') {
		return count * 6730
	}
	else if (size == '115x400' && rotation == 'Twice per week') {
		return count * 8410
	}
}


let gray = initStandart('#gray')
let brown = initStandart('#brown')
let branded = initStandart('#branded')

function init() {
	gray = initStandart('#gray')
	brown = initStandart('#brown')
	branded = initStandart('#branded')
	let total = gray + brown + branded
	$('#totalPrice').html(total + " ")
}


init()




$('.props_checkbox').on('change', function() {
	$(this).parents().toggleClass('active')
	init()
})







$('.size_block .select').on('click', function() {
	$(this).children('.dropdown').slideToggle(200)
})
$('.size_block .select .dropdown p').on('click', function() {
	$(this).parents('.dropdown').siblings('.value').html($(this).html())
	init()
})






$('.week_block .select').on('click', function() {
	$(this).children('.dropdown').slideToggle(200)
})
$('.week_block .select .dropdown p').on('click', function() {
	$(this).parents('.dropdown').siblings('.value').html($(this).html())
	init()
})






$('.minus').on('click', function() {
	let count = +$(this).siblings('.number').attr('data-count')
	if (count > 1) {
		count -= 1
		$(this).siblings('.number').attr('data-count', count)
		$(this).siblings('.number').html(count)
		init()
	}
})


$('.plus').on('click', function() {
	let count = +$(this).siblings('.number').attr('data-count')
	count += 1
	$(this).siblings('.number').attr('data-count', count)
	$(this).siblings('.number').html(count)
	init()
})




$('.calculator_products_item-color svg').on('click', function() {
	let id = $(this).parents().parents().attr('data-id')
	$(id).css('display', 'flex')
	init()
})


$('.remove_block img').on('click', function() {
	$(this).parents('.calculator_basket_item').css('display', 'none')
	init()
})
