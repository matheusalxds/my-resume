(function () {
  var $experiencie01 = $('.c-experiences__article--1');
  var $experiencie02 = $('.c-experiences__article--2');
  var $experiencie03 = $('.c-experiences__article--3');
  var $experiencie04 = $('.c-experiences__article--4');

  var check1 = 0;
  var check2 = 375;
  var check3 = 880;
  var check4 = 1500;
  var $width = $(window).width();

  function checkPosition() {
    if ($width >= 980) {
      check1 = 0;
      check2 = 375;
      check3 = 950;
      check4 = 1200;
    } else {
      //tablet
      if ($width >= 740) {
        check1 = 310;
        check2 = 930;
        check3 = 1400;
        check4 = 1800;
      } else {
        // mobile
        check1 = 900;
        check2 = 1800;
        check3 = 2600;
        check4 = 3600;
      }
    }

    if (window.scrollY >= check1) {
      $experiencie01.addClass('c-experiences__article--1-animate');
    } else {
      $experiencie01.removeClass('c-experiences__article--1-animate');
    }

    if (window.scrollY >= check2) {
      $experiencie02.addClass('c-experiences__article--2-animate');
    } else {
      $experiencie02.removeClass('c-experiences__article--2-animate');
    }

    if (window.scrollY >= check3) {
      $experiencie03.addClass('c-experiences__article--3-animate');
    } else {
      $experiencie03.removeClass('c-experiences__article--3-animate');
    }

    if (window.scrollY >= check4) {
      $experiencie04.addClass('c-experiences__article--4-animate');
    } else {
      $experiencie04.removeClass('c-experiences__article--4-animate');
    }
  }

  checkPosition();
  window.addEventListener('scroll', checkPosition);
})();
