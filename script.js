$(function() {
  
  $('.inquiry-here').click(function(){
    var position = $('#inquiry').offset().top;
    $('html,bidy').animate({
      'scrollTop':position
    },10);
    return false;
  });

    $('.faq-list-item').click(function(){
      var $answer = $(this).find('.answer');
      if($answer.hasClass('open')){
        $answer.removeClass('open');
        $answer.slideUp(250);
        $(this).find('.fa-angle-up').replaceWith('<span class="fas fa-angle-down fouteenth-fa"></span>');
      }else{
        $answer.addClass('open');
        $answer.slideDown(250);
        $(this).find('.fa-angle-down').replaceWith('<span class="fas fa-angle-up fouteenth-fa"></span>');
      }
    });

    // $(window).scroll(function() {
    //   if($(this).scrollTop() &gt; 60) {
    //     $('#back_to_top').fadeIn("slow");
    //   } else {
    //     $('#back_to_top').fadeOut("slow");
    //   }
    // });
    $('#back_to_top').click(function(){
      $('html, body').animate({
        'scrollTop':0
      },500);
      return false;
     });
});