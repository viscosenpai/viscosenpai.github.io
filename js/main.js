$(function () {
  var $win = $(window),
    $main = $('.main'),
    $hero = $('.hero'),
    $nav = $('.nav'),
    $navToggle = $('#nav-toggle'),
    $menu = $('.menu'),
    $products = $('.products'),
    fixedClass = 'is-fixed',
    activeClass = 'is-active';

  $win.on('load', function () {
    $hero.t({
      speed: 60,
      speed_vary: true,
      fin: function () {
        $('.is-scroll').addClass(activeClass);
      }
    });
  });

  $win.on('load scroll', function () {
    var scrollTop = $(this).scrollTop();
    var winH = $(window).height() * 0.95;
    if (scrollTop > $nav.offset().top) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', $nav.outerHeight());
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
    if (scrollTop + winH > $products.offset().top) {
      $products.addClass(activeClass);
    }
  });

  $navToggle.on('click', function () {
    $([this, $menu]).toggleClass(activeClass);
  });

  $('a[href^="#"]').on('click', function () {
    if($navToggle.hasClass(activeClass) && $menu.hasClass(activeClass)){
      $navToggle.add($menu).removeClass(activeClass);
    }
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href === "#" || href === "" ? 'html' : href);
    var position = target.offset().top - $nav.outerHeight();
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  document.getElementById('email').innerText = 's207ae08k.visco' + '@' + 'gmail.com';
});
