$(document).ready(function(){
    $('#js-menu').on('click',function(e){
        $('#js-submenu').toggle();
        $('#js-modal-mask').toggle();
        $('body').toggleClass('disable-scroll')
    })


$('#js-hd-search').on('focus',function(e){
    $('.js-search').addClass('search-focus');
    $('.js-hot-search').addClass('js-hot-focus');
    $('#js-modal-mask').show();
    
})
$('#js-hd-search').on('blur',function(e){
    $('.js-search').removeClass('search-focus');
    $('.js-hot-search').removeClass('js-hot-focus');
    $('#js-modal-mask').hide();
})
})