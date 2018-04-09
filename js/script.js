$(document).ready(function(){
  $("#scrollNav").hide()
  $(window).scroll(function(){
    if ($(this).scrollTop() > 10) {
            $("#scrollNav").fadeIn();
        } else {
            $("#scrollNav").fadeOut();
        }
      });
  });

$(document).ready(function() {
  $(".menu-2").hide()
  $(".hamburger").click(function(){
    $(".menu-2").slideToggle()
  })
});