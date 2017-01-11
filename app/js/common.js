
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 9000,
        items: 1
    })

});
/*
$('label').on('click',function(){
    if ($('#c2').is(":checked")){
        console.log('checked');
        $('.c2Trigger:before').css('backgroundImage', "url('img/svg/checked.svg')");
        $('.c2Trigger:before').css('backgroundSize', 'cover')
    }
})
*/
