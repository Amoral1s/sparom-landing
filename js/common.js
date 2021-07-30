jQuery(document).ready(function ($) {

  if(screen.width <= 992) {
    $('.video').remove();
  } else {
    $('.video div').on('click', function() {
      $(this).fadeOut(0);
      $('.video iframe').fadeIn(0);
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

  //Вызов квиза
  $('.call-quiz').on('click', function() {
    $('.quiz').fadeIn(300);
    $('body').css('overflow-y', 'hidden');
    $('html').css('overflow-y', 'hidden');
  });
  //шаг 1
  $('input[name="step-one"]').on('change', function() {
    $('.quiz-step-one').fadeOut(0);
    $('.quiz-step-two').fadeIn(0);
  });
  $('.quiz-step-one-btn .button').on('click', function() {
    if ($('input[name="step-one"]:checked').val() == undefined) {
      alert('Выберите что нибудь и повторите попытку!');
    } else {
      $('.quiz-step-one').fadeOut(0);
      $('.quiz-step-two').fadeIn(0);
    }
  });

  //шаг 2
  $('input[name="step-two"]').on('change', function() {
    $('.quiz-step-two').fadeOut(0);
    $('.quiz-step-three').fadeIn(0);
  });
  
  $('.quiz-step-two-btn .next').on('click', function() {
    if ($('input[name="step-two"]:checked').val() == undefined) {
      alert('Выберите что нибудь и повторите попытку!');
    } else {
      $('.quiz-step-two').fadeOut(0);
      $('.quiz-step-three').fadeIn(0);
    }
  });
  $('.quiz-step-two-btn .prev').on('click', function() {
    $('.quiz-step-two').fadeOut(0);
    $('.quiz-step-one').fadeIn(0);
  });
  
  //шаг 3
  $('.quiz-step-three-btn .next').on('click', function() {
    if ($('.quiz-step-three-city input').val() == '') {
      alert('Заполните поле и повторите попытку!');
    } else {
      $('.quiz-step-three').fadeOut(0);
      $('.quiz-step-four').fadeIn(0);
    }
    
  });
  $('.quiz-step-three-btn .prev').on('click', function() {
    $('.quiz-step-three').fadeOut(0);
    $('.quiz-step-two').fadeIn(0);
  });
  //шаг 4
  $('input[name="quiz-step-4"]').on('change', function() {
    $('.quiz-step-four').fadeOut(0);
    $('.quiz-step-five').fadeIn(0);
  });
  $('.quiz-step-four-btn .next').on('click', function() {
    if ($('input[name="quiz-step-4"]:checked').val() == undefined) {
      alert('Выберите что нибудь и повторите попытку!');
    } else {
      $('.quiz-step-four').fadeOut(0);
      $('.quiz-step-five').fadeIn(0);
    }
    
  });
  $('.quiz-step-four-btn .prev').on('click', function() {
    $('.quiz-step-four').fadeOut(0);
    $('.quiz-step-three').fadeIn(0);
  });


  //шаг 5
  $('.quiz-step-five-btn .next').on('click', function() {
    
    if ($('input[name="quiz-step-5"]:checked').val() == undefined) {
      alert('Выберите что нибудь и повторите попытку!');
    } else {
      $('.quiz-step-five').fadeOut(0);
      if ($('input[name="quiz-step-5"]:checked').val() == 1) {
        $('.quiz-step-wap').fadeIn(0);
      } else {
        $('.quiz-step-tel').fadeIn(0);
      }
    }
    
  });
  $('.quiz-step-five-btn .prev').on('click', function() {
    $('.quiz-step-five').fadeOut(0);
    $('.quiz-step-four').fadeIn(0);
  });

  //ватсап
  $('.quiz-step-wap-btn .next').on('click', function() {
    $('#quiz-submit').trigger('click');
  });
  $('.quiz-step-wap-btn .prev').on('click', function() {
    $('.quiz-step-wap').fadeOut(0);
    $('.quiz-step-five').fadeIn(0);
  });
  //телефон
  $('.quiz-step-tel-btn .next').on('click', function() {
    $('#quiz-submit').trigger('click');
  });
  $('.quiz-step-tel-btn .prev').on('click', function() {
    $('.quiz-step-tel').fadeOut(0);
    $('.quiz-step-five').fadeIn(0);
  });
  //сабмит
  $('#quiz-submit').on('click', function() {
    console.log('form submit');
  });




});