/* SLIDER = CARROSSEL */ 

$(document).ready(function(){
    const slickOptions = {
        autoplay: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev" >Previous</button>;',
        nextArrow: ' <button type="button" class="slick-next slider__next" >Previous</button>;',
    };  

    $('.slider').slick(slickOptions);
});