let idx= 1;
var slideKe=1;
let jml_slide=0;
$( ".nav-link" ).each(function( index ) {
    jml_slide=jml_slide+1;
});
$("#js-jml-slide").text(jml_slide);
$("#js-idx-slide").text(idx);
    $('.js-slider').slick({
    prevArrow: '<img src="img/icon-left.png" class="arrow-slider arrow-prev"alt="">',
    nextArrow: '<img src="img/icon-right.png" class="arrow-slider arrow-next"alt="">',
    swipe:false
    });    
    $('.nav .nav-link').click(function() {
        var id=$(this).prop( "id" );                
        let idx=parseInt(id.charAt(id.length-1));
        let toIdx=idx-1;
        slideKe=toIdx;
    $('.active').removeClass('active');
    $(this).addClass('active');
    $('.js-slider').slick('slickGoTo',toIdx);
    $("#js-idx-slide").text(idx);
    });
    $('.arrow-slider').click(function() {
    var currentSlide = $('.js-slider').slick('slickCurrentSlide');
    var txt_slide=currentSlide+1;
    $("#js-idx-slide").text(txt_slide);
    $( ".nav-link" ).each(function( index ) {
        if(currentSlide===index){
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
    });
    });