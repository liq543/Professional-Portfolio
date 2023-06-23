// Scrolling effect redone
$(document).ready(function() {
  $('#menu a').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 800);
  });
