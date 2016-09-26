$(document).ready(function(){	

/***************************************************
	MENU
***************************************************/
jQuery('ul.nav li.dropdown').hover(function (){
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
    jQuery('a').hover(function() {
        var height = jQuery(this).offset();
        jQuery(this).parent().find('.sub-menu').css('top', height.top - +106);
    });
}, function (){
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();      
});

jQuery('.btn-navbar').on('click',function(){
    jQuery('nav#main_menu > .nav-collapse > ul.navbar-nav').slideDown();
});

/***************************************************
		TOOLTIP & POPOVER
***************************************************/
$("[rel=tooltip]").tooltip();
$("[data-rel=tooltip]").tooltip();

/***************************************************
        ANIMATE TO LINK
***************************************************/
    $(document).ready(function(){
        $('.go-banner').on('click',function(){
            $('html, body').animate({scrollTop: $("#banner").offset().top}, 1000);
        });
    });

    $(document).ready(function(){
        $('.go-banner9').on('click',function(){
            $('html, body').animate({scrollTop: $("#banner9").offset().top}, 1500);
        });
    });

    $(document).ready(function(){
        $('.go-contact').on('click',function(){
            $('html, body').animate({scrollTop: $("#contact").offset().top}, 2000);
        });
    });   
    
/***************************************************
		BACK TO TOP LINK
***************************************************/
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			})
		});	

/***************************************************
	IFRAME
***************************************************/
	$("iframe").each(function(){
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') != -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
		$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else $(this).attr('src',ifr_source+'?'+wmode);
	});
	
/***************************************************
	ANIMATIONS
***************************************************/

$(function() { 	
$('.welcome').show().addClass("animated fadeInDown");
$('.welcome_index').show().addClass("animated fadeInDown");
$('.intro_sections h6').show().addClass("animated fadeInUp");
$('.fadeinup').show().addClass("animated fadeInUp");
$('.fadeindown').show().addClass("animated fadeInDown");
}); 
