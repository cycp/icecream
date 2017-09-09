$(document).ready(function() {
  $('#scroll-img').click(function() {
    $('html, body').scrollTop(700);
  })

  $('#button').click(function() {
    $('#modal-overlay').fadeIn(400);
    $('#modal-box').show();
    $('body').addClass('no-scroll');
  })

  $('#x, #modal-overlay').click(function() {
    $('#modal-box').fadeOut(400, function() {
      $('#modal-overlay').fadeOut(400);
    });
    $('body').removeClass('no-scroll'); 
  })

  $('.flavor').hover(function() {
    $(this).children('.flavor-img').fadeTo(400, 0.1);
    $(this).children('.name').fadeIn(500);
    $(this).find('.yelp').fadeIn(500);
  }, 
  function() {
    $(this).stop();
    $(this).children('.flavor-img').fadeTo(400, 1);
    $(this).children('.name').hide();
    $(this).find('.yelp').hide();
  })

  var divs = $('div[id^="subtext"]').hide(),
      i = 0;

  (function cycle() { 

      divs.eq(i).fadeIn(400)
                .delay(1000)
                .fadeOut(400, cycle);

      i = ++i;
  })();

  $('#weirdaf').delay(8000).fadeIn();

  $(document).scroll(function () {
    var y = $(this).scrollTop();

    if (y > 1800) {
        $('svg').fadeIn();
        $('#fact').delay(2100).fadeIn(800);
        $('#fact-img').delay(2100).fadeIn(800);
        $('hr').delay(2200).fadeIn(800);
    }

});



});