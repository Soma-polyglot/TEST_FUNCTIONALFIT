$(function(){
    $('.sortNav li').each(function(){
        $(this).click(function(){
            var btnName = $(this).attr("class").substring(3).toLowerCase();
            var className = '.';
            className += btnName;
      if(btnName == 'all') {
        $('.container > div').fadeIn(200);
      } else {
        $('.container div:not(className)').hide();
        $(className).fadeIn(200);
      }
        });
    });
});
