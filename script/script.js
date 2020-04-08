$(function(){
  $("a").click(function(){
    var id=$(this).attr('href');
    var position=$(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },500);
  });
  $('#bar-nav').click(function(){
    $('#modal-nav').fadeIn();
  });
  $('#modal-nav span,#modal-nav a').click(function(){
    $('#modal-nav').fadeOut();
  });
});
