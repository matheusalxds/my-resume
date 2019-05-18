(function () {
  var $experiencie01 = $('.c-experiences__article--1');
  var $experiencie02 = $('.c-experiences__article--2');
  var $experiencie03 = $('.c-experiences__article--3');
  var $experiencie04 = $('.c-experiences__article--4');
  var $width = $(window).width();

  function checkPosition() {
    var check1 = 0;
    var check2 = 375;
    var check3 = 880;
    var check4 = 1500;

    // mobile
    if($width >= 485) {
      check1 = 585;
      check2 = 135;
      check3 = 205;
      check4 = 295;
    }

    //table
    if($width >= 740) {
      check1 = 310;
      check2 = 930;
      check3 = 1530;
      check4 = 2200;
    }

    if (window.scrollY >= check1) {
      $experiencie01.removeClass('c-experiences__article--disabled');
    } else {
      $experiencie01.addClass('c-experiences__article--disabled');
    }

    if (window.scrollY > check2) {
      $experiencie02.removeClass('c-experiences__article--disabled');
    } else {
      $experiencie02.addClass('c-experiences__article--disabled');
    }

    if (window.scrollY > check3) {
      $experiencie03.removeClass('c-experiences__article--disabled');
    } else {
      $experiencie03.addClass('c-experiences__article--disabled');
    }

    if (window.scrollY > check4) {
      $experiencie04.removeClass('c-experiences__article--disabled');
    } else {
      $experiencie04.addClass('c-experiences__article--disabled');
    }
  }

  checkPosition();
  window.addEventListener('scroll', checkPosition);
})();
