$(document).ready(function(){
    $('.slick_C').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        dots: true,
        arrows: false
    });
    AOS.init({
        disable: 'mobile'

    });
});
$(window).scroll(function (event) {

    var scroll = $(window).scrollTop()+150;
    var section2top = $('.body__section--startTrading').offset().top;
    var section2bot = +section2top+ +$('.body__section--startTrading').outerHeight();
    if(scroll > section2top && scroll < section2bot){
        $('.col__img').addClass("seen");

    }
    else {
        $('.col__img').removeClass("seen");

    }
});

function headerBG(){
    var Pete = $('.Pete__quote');
    var Ann = $('.Ann__quote');
    var Tom = $('.Tom__quote');
    var Dale = $('.Dale__quote');
    if(Pete.hasClass( "slick-current" )){
        $('header').css('backgroundImage', "url('img/header_bg_Pete.jpg')");
    }
    else if (Ann.hasClass( "slick-current" )){
        $('header').css('backgroundImage', "url('img/header_bg_Ann.jpg')");
    }
    else if (Tom.hasClass( "slick-current" )){
        $('header').css('backgroundImage', "url('img/header_bg_Tom.jpg')");
    }
    else if  (Dale.hasClass( "slick-current" )){
        $('header').css('backgroundImage', "url('img/header_bg_Dale.jpg')");
    }
}

window.setInterval(headerBG, 1000);



/*
$('label').on('click',function(){
    if ($('#c2').is(":checked")){
        console.log('checked');
        $('.c2Trigger:before').css('backgroundImage', "url('img/svg/checked.svg')");
        $('.c2Trigger:before').css('backgroundSize', 'cover')
    }
})
*/
