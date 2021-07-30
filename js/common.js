jQuery(document).ready(function ($) {

  if(screen.width <= 992) {
    $('.video').remove();
  } else {
    $('.video div').on('click', function() {
      $(this).fadeOut(200);
      $('.video iframe').fadeIn(200);
    });
  }
  
  

  (function() {
    var start = new Date;
    start.setHours(0, 0, 0); // 11pm
  
    function pad(num) {
      return ("0" + parseInt(num)).substr(-2);
    }
  
    function tick() {
      var now = new Date;
      if (now > start) { // too late, go to tomorrow
        start.setDate(start.getDate() + 1);
      }
      var remain = ((start - now) / 1000);
      var hh = pad((remain / 60 / 60) % 60);
      var mm = pad((remain / 60) % 60);
      var ss = pad(remain % 60);


      if (hh >= 23 && hh <= 2 ) {
        
        $('.hour').text('00');
        $('.min').text('00');
        $('.sec').text('00');
      } else {
        $('.hour').text(hh);
        $('.min').text(mm);
        $('.sec').text(ss);
      }
      
      setTimeout(tick, 1000);
    }
  
    tick();
  })();


});