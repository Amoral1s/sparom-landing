jQuery(document).ready(function ($) {

  $('.video div').on('click', function() {
    $(this).fadeOut(200);
    $(this).prev().fadeIn(200);
  });
  $('.quiz-close').on('click', function() {
    $('.quiz').fadeOut(300);
    $('body').css('overflow-y', 'auto');
    $('html').css('overflow-y', 'auto');
  });

  if(screen.width <= 992) {
    $('.video').hide();
    $('.slider-out').fotorama({
      width: '100%',
      maxwidth: '100%',
      ratio: 16/9,
      allowfullscreen: true,
      nav: 'thumbs',
      fit: 'cover',
      arrows: true,
      thumbwidth: 65,
      thumbheight: 50,
      thumbmargin: 10,
    });
    $('.slider-inner').fotorama({
      width: '100%',
      maxwidth: '100%',
      ratio: 16/9,
      allowfullscreen: true,
      nav: 'thumbs',
      fit: 'cover',
      arrows: true,
      thumbwidth: 65,
      thumbheight: 50,
      thumbmargin: 10,
    });
  } else {
    
    $('.slider-out').fotorama({
      width: '100%',
      maxwidth: '100%',
      ratio: 16/9,
      allowfullscreen: true,
      nav: 'thumbs',
      fit: 'cover',
      arrows: true,
      thumbwidth: 170,
      thumbheight: 120,
      thumbmargin: 20,
    });
    $('.slider-inner').fotorama({
      width: '100%',
      maxwidth: '100%',
      ratio: 16/9,
      allowfullscreen: true,
      nav: 'thumbs',
      fit: 'cover',
      arrows: true,
      thumbwidth: 170,
      thumbheight: 120,
      thumbmargin: 20,
    });
  }

  $('.sert img').on('click', function() {
    $('.overlay').fadeIn(200);
    $('.popup-img').fadeIn(200);
    $('.popup-img img').attr('src', $(this).attr('src'));
  });

  $('.close').on('click', function() {
    $('.overlay').fadeOut(200);
    $('.popup-img').fadeOut(200);
  });
  $('.popup-img').on('click', function() {
    $('.overlay').fadeOut(200);
    $('.popup-img').fadeOut(200);
  });

  //out
  
  
  //youtube
  
  
  //thanks date
  const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  let now = new Date();

  let datePlus = +now.getDate() + 1;
    
  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }
  $('.act-h').text(pad(now.getHours()));
  $('.act-min').text(pad(now.getMinutes()));
  if (datePlus > 31) {
    $('.day-text').text('1');
    $('.month-text').text(month[now.getMonth() + 1]);
  } else {
    $('.day-text').text(datePlus);
    $('.month-text').text(month[now.getMonth()]);
  }

  //TIMER
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
    $('input[name="step-one"]').parent().removeClass('checked');
    $(this).parent().addClass('checked');
    setTimeout(() => {
      $('.quiz-step-one').fadeOut(100);
      $('.quiz-step-two').fadeIn(200);
    }, 500);
  });
  $('.quiz-step-one-btn .button').on('click', function() {
    if ($('input[name="step-one"]:checked').val() == undefined) {
      alert('Выберите что нибудь и повторите попытку!');
    } else {
      setTimeout(() => {
        $('.quiz-step-one').fadeOut(100);
      $('.quiz-step-two').fadeIn(200);
      }, 500);
    }
  });

  //шаг 2
  $('input[name="step-two"]').on('change', function() {
    $('input[name="step-two"]').parent().removeClass('checked');
    $(this).parent().addClass('checked');
    setTimeout(() => {
      $('.quiz-step-two').fadeOut(100);
    $('.quiz-step-three').fadeIn(200);
    }, 500);
  });
  
  $('.quiz-step-two-btn .next').on('click', function() {
    if ($('input[name="step-two"]:checked').val() == undefined) {
      alert('Выберите что нибудь и повторите попытку!');
    } else {
     setTimeout(() => {
      $('.quiz-step-two').fadeOut(100);
      $('.quiz-step-three').fadeIn(200);
     }, 500);
    }
  });
  $('.quiz-step-two-btn .prev').on('click', function() {
    $('.quiz-step-two').fadeOut(100);
    $('.quiz-step-one').fadeIn(200);
  });
  
  //шаг 3
  $('.quiz-step-three-btn .next').on('click', function() {
    if ($('.quiz-step-three-city input').val() == '') {
      alert('Заполните поле и повторите попытку!');
    } else {
      setTimeout(() => {
        $('.quiz-step-three').fadeOut(100);
      $('.quiz-step-four').fadeIn(200);
      }, 500);
    }
    
  });
  $('.quiz-step-three-btn .prev').on('click', function() {
      $('.quiz-step-three').fadeOut(100);
    $('.quiz-step-two').fadeIn(200);
  });
  //шаг 4
  $('input[name="quiz-step-4"]').on('change', function() {
    $('input[name="quiz-step-4"]').parent().removeClass('checked');
    $(this).parent().addClass('checked');
    setTimeout(() => {
      $('.quiz-step-four').fadeOut(100);
    $('.quiz-step-five').fadeIn(200);
    }, 500);
  });
  $('.quiz-step-four-btn .next').on('click', function() {
    if ($('input[name="quiz-step-4"]:checked').val() == undefined) {
      alert('Выберите что нибудь и повторите попытку!');
    } else {
      setTimeout(() => {
        $('.quiz-step-four').fadeOut(100);
      $('.quiz-step-five').fadeIn(200);
      }, 500);
    }
    
  });
  $('.quiz-step-four-btn .prev').on('click', function() {
      $('.quiz-step-four').fadeOut(100);
      $('.quiz-step-three').fadeIn(200);
  });


  //шаг 5
  $('input[name="quiz-step-5"]').on('change', function() {
    $('input[name="quiz-step-5"]').parent().removeClass('checked');
    $(this).parent().addClass('checked');
    setTimeout(() => {
      $('.quiz-step-five').fadeOut(100);
      if ($('input[name="quiz-step-5"]:checked').val() == 1) {
        $('.quiz-step-wap').fadeIn(200);
      } else {
        $('.quiz-step-tel').fadeIn(200);
      }
    }, 500);
  });
  $('.quiz-step-five-btn .next').on('click', function() {
    
    if ($('input[name="quiz-step-5"]:checked').val() == undefined) {
      alert('Выберите что нибудь и повторите попытку!');
    } else {
      setTimeout(() => {
        $('.quiz-step-five').fadeOut(100);
      if ($('input[name="quiz-step-5"]:checked').val() == 1) {
        $('.quiz-step-wap').fadeIn(200);
      } else {
        $('.quiz-step-tel').fadeIn(200);
      }
      }, 500);
    }
    
  });
  $('.quiz-step-five-btn .prev').on('click', function() {
      $('.quiz-step-five').fadeOut(100);
    $('.quiz-step-four').fadeIn(200);
  });

  //ватсап
  $('.quiz-step-wap-btn .next').on('click', function() {
    $('#quiz-submit').trigger('click');
  });
  $('.quiz-step-wap-btn .prev').on('click', function() {
      $('.quiz-step-wap').fadeOut(100);
      $('.quiz-step-five').fadeIn(200);
  });
  //телефон
  $('.quiz-step-tel-btn .next').on('click', function() {
    $('#quiz-submit').trigger('click');
  });
  $('.quiz-step-tel-btn .prev').on('click', function() {
      $('.quiz-step-tel').fadeOut(100);
    $('.quiz-step-five').fadeIn(200);
  });
  //сабмит
  $('#quiz-submit').on('click', function() {
    console.log('form submit');
  });




});