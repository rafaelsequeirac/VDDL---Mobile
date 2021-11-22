$(function () {
    var width = (parseInt($(".carrossel .item").outerWidth() +
    parseInt($('.carrossel .item').css('margin-right')))) * 
    $('.carrossel .item').length;

    $('.carrossel').css('width', width);

    var numImages = 1;
    var marginPadding = 42;

    var ident = 0;
    var count = ($('.carrossel .item').length / numImages) - 1;
    var slide = (numImages * marginPadding) + ($('.carrossel img').outerWidth() *
    numImages);

    $('.forth').click(function(){
        if(ident < count){
        ident++;
        $('.carrossel').animate({'margin-left': '-=' + slide 
        + 'px'}, '500');
        }
    });

    $('.back').click(function(){
        if(ident >= 1){
        ident--;
        $('.carrossel').animate({'margin-left': '+=' + slide 
        + 'px'}, '500');
        }
    });
});