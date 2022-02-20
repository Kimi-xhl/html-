$('ul.navbar').on('click','li', function(e) {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
})
