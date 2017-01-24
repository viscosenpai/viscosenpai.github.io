$(function () {
  var $win = $(window),
    $header = $('.header')
    $main = $('.main'),
    $hero = $('.hero'),
    $nav = $('.nav'),
    $products = $('.products'),
    navPos = $nav.offset().top,
    productsPos = $products.offset().top,
    fixedClass = 'is-fixed';

  $win.on('load', function () {
    $hero.t({
      speed: 60,
      speed_vary: true,
      fin: function () {
        $('.is-scroll').addClass('is-active');
      }
    });
  });

  $win.on('load scroll', function () {
    var scrollTop = $(this).scrollTop();
    var winH = $(window).height() * 0.95;
    if (scrollTop > navPos) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', $nav.outerHeight());
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
    // document.getElementById('console').innerText = scrollTop + '\n'; // 後で消す
    // document.getElementById('console').innerText += scrollTop + winH + '\n'; // 後で消す
    // document.getElementById('console').innerText += productsPos; // 後で消す
    if (scrollTop + winH > productsPos) {
      $products.addClass('is_active');
    }
  });

  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - $nav.outerHeight();
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  document.getElementById('email').innerText = 's207ae08k.visco' + '@' + 'gmail.com';
});
