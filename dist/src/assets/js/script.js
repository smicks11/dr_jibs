if ($(window).width() > 991) {
  $(window).on("scroll touchmove", function () {
    if ($(document).scrollTop() >= $("#showcase").position().top - 500) {
      $("body").css("background", $("#showcase").attr("data-color"));
    }
    if ($(document).scrollTop() > $("#whyme").position().top - 500) {
      $("body").css("background", $("#whyme").attr("data-color"));
    }
    if ($(document).scrollTop() > $("#contact").position().top - 600) {
      $("body").css("background", $("#contact").attr("data-color"));
    }
  });
}
AOS.init({
  //AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function

  // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 300, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: "ease-in-out-sine", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
});
/*if (screen && screen.width > 1199) {
    $( window ).ready(function() {
        var wHeight = $(window).height();

        $('.smooth-bg')
            .height(wHeight)
            .scrollie({
                scrollOffset : -900,
                scrollingInView : function(elem) {
                    var bgColor = elem.data('background');
                    $('body').css('background-color', bgColor);
                }
            });

        // FOR-SPORTS-PAGE
        $('.smooth-bg-sports')
            .height(wHeight)
            .scrollie({
                scrollOffset : -500,
                scrollingInView : function(elem) {
                    var bgColor = elem.data('background');
                    $('body').css('background-color', bgColor);
                }
            });

    });
}*/

// PRELOADER
var Preloader = (function () {
  var mainEl = null;
  var els = {
    label: null,
    anim: null,
    bar: null,
    bar_inner: null,
    amt: null,
  };

  var _onComplete = function () {};

  function setLabel(str) {
    els.label.textContent = str;
  }

  function setValue(val) {
    if (val < 0) val = 0;
    if (val > 100) val = 100;
    val += "%";
    els.bar_inner.style.width = val;
    els.amt.textContent = val;

    if (val === "100%") {
      //mainEl.classList.add('complete');
      $("body").addClass("loaded");
      // $('body').addClass('loaded').css({'overflow': 'visible'});
      _onComplete(mainEl, els);
    }
  }

  function init(el, callback) {
    mainEl = el;
    for (var k in els) {
      els[k] = mainEl.querySelector(".preloader-" + k);
    }
    if (typeof callback === "function") _onComplete = callback;
    setValue(0);
  }

  return {
    init: init,
    setValue: setValue,
    setLabel: setLabel,
    els: els,
  };
})();

Preloader.init(document.querySelector(".preloader"), function () {
  //console.log('Loading complete!');
  //Preloader.setLabel('Complete!');
});

var loaded = 0;
setInterval(function () {
  loaded += Math.floor(Math.random() * 5);
  Preloader.setValue(loaded);
}, 100);

// scroll-speed
// $(function() {
//     //jQuery.scrollSpeed(100, 800, 'easeOutCubic');
//     jQuery.scrollSpeed(40, 800);
//
// });

$.fn.moveIt = function () {
  var $window = $(window);
  var instances = [];

  $(this).each(function () {
    instances.push(new moveItItem($(this)));
  });

  window.addEventListener(
    "scroll",
    function () {
      var scrollTop = $window.scrollTop();
      instances.forEach(function (inst) {
        inst.update(scrollTop);
      });
    },
    { passive: true }
  );
};

var moveItItem = function (el) {
  this.el = $(el);
  this.speed = parseInt(this.el.attr("data-scroll-speed"));
};

moveItItem.prototype.update = function (scrollTop) {
  this.el.css("transform", "translateY(" + -(scrollTop / this.speed) + "px)");
};

// Initialization
$(function () {
  $("[data-scroll-speed]").moveIt();
});

// CSS Browser
function css_browser_selector(u) {
  var ua = u.toLowerCase(),
    is = function (t) {
      return ua.indexOf(t) > -1;
    },
    g = "gecko",
    w = "webkit",
    s = "safari",
    o = "opera",
    m = "mobile",
    h = document.documentElement,
    b = [
      !/opera|webtv/i.test(ua) && /msie\s(\d)/.test(ua)
        ? "ie ie" + RegExp.$1
        : is("firefox/2")
        ? g + " ff2"
        : is("firefox/3.5")
        ? g + " ff3 ff3_5"
        : is("firefox/3.6")
        ? g + " ff3 ff3_6"
        : is("firefox/3")
        ? g + " ff3"
        : is("gecko/")
        ? g
        : is("opera")
        ? o +
          (/version\/(\d+)/.test(ua)
            ? " " + o + RegExp.$1
            : /opera(\s|\/)(\d+)/.test(ua)
            ? " " + o + RegExp.$2
            : "")
        : is("konqueror")
        ? "konqueror"
        : is("blackberry")
        ? m + " blackberry"
        : is("android")
        ? m + " android"
        : is("chrome")
        ? w + " chrome"
        : is("iron")
        ? w + " iron"
        : is("applewebkit/")
        ? w + " " + s + (/version\/(\d+)/.test(ua) ? " " + s + RegExp.$1 : "")
        : is("mozilla/")
        ? g
        : "",
      is("j2me")
        ? m + " j2me"
        : is("iphone")
        ? m + " iphone"
        : is("ipod")
        ? m + " ipod"
        : is("ipad")
        ? m + " ipad"
        : is("mac")
        ? "mac"
        : is("darwin")
        ? "mac"
        : is("webtv")
        ? "webtv"
        : is("win")
        ? "win" + (is("windows nt 6.0") ? " vista" : "")
        : is("freebsd")
        ? "freebsd"
        : is("x11") || is("linux")
        ? "linux"
        : "",
      "js",
    ];
  c = b.join(" ");
  h.className += " " + c;
  return c;
}
css_browser_selector(navigator.userAgent);

//Auto-height-Hero-Banner
$(function () {
  $(".section-auto-height").css({ height: $(window).height() + "px" });
  $(window).resize(function () {
    // On resize
    $(".section-auto-height").css({ height: $(window).height() + "px" });
  });
});

// Rellax-Animation
// var rellax = new Rellax('.rellax');

// Wow-Animation
var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: false, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window
});
wow.init();

//MOUSE-ANIMATION

$(".movement").parallax();

// Sticky Header

if (screen && screen.width > 767) {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".main_h").addClass("sticky");
    } else {
      $(".main_h").removeClass("sticky");
    }
  });
}

// Mobile Navigation
$(".mobile-toggle").click(function () {
  if ($(".main_h").hasClass("open-nav")) {
    $(".main_h").removeClass("open-nav");
  } else {
    $(".main_h").addClass("open-nav");
  }
});

$(".main_h nav li a").click(function (event) {
  if ($(".main_h").hasClass("open-nav")) {
    $(".main_h").removeClass("open-nav");
  }
});

var menu = document.querySelector("#menu");
menu.addEventListener("click", function () {
  this.classList.toggle("active");
});

if (screen && screen.width < 991) {
  $(document).ready(function () {
    $("#menu, .menu--inola ul li a").click(function () {
      $("body").toggleClass("overflow-hidden");
    });

    $(".menu--inola ul li a").click(function () {
      $("#menu").removeClass("active");
    });
  });
}

// popups-form

$("#notch_quality").on("click", "button", function () {
  var values = $(this).val();
  $("input[name='deliver_notch_quality'][value='" + values + "']").prop(
    "checked",
    true
  );
});

$("#speedy_around").on("click", "button", function () {
  var values = $(this).val();
  $("input[name='speedy'][value='" + values + "']").prop("checked", true);
});

$("#chat_available").on("click", "button", function () {
  var values = $(this).val();
  $("input[name='available'][value='" + values + "']").prop("checked", true);
});

$("#email_availability").on("click", "button", function () {
  var values = $(this).val();
  $("input[name='email_availability'][value='" + values + "']").prop(
    "checked",
    true
  );
});

$("#affordable").on("click", "button", function () {
  var values = $(this).val();
  $("input[name='affordable'][value='" + values + "']").prop("checked", true);
});

$(".lets_start").click(function () {
  $(".content_worked_together").addClass("active");
  $(".content-hello-there").removeClass("active");
});

$(".show_feedback_popup").click(function () {
  $(".content_deliver").addClass("active");
  $(".content_worked_together").removeClass("active");
});

$(".show_test_project_popup").click(function () {
  $(".test_project").addClass("active");
  $(".content_worked_together").removeClass("active");
});

var items = $(".item");
var currentItem = items.filter(".active2");
$(".nextdiv").on("click", function () {
  var nextItem = currentItem.next();
  currentItem.removeClass("active");
  if (nextItem.length) {
    currentItem = nextItem.addClass("active");
  } else {
    // If you want it to loop around
    //currentItem = items.first().addClass('active');
  }
});

// popups-form

$(".Innerpage-carousel").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 700,
  fade: true,
  autoplay: true,
  cssEase: "linear",
});

$("#nav-click-scroll").onePageNav({
  currentClass: "current",
  changeHash: true,
  scrollSpeed: 1200,
  scrollThreshold: 0.5,
  filter: "",
  easing: "swing",
  begin: function () {
    //I get fired when the animation is starting
  },
  end: function () {
    //I get fired when the animation is ending
  },
  scrollChange: function ($currentListItem) {
    //I get fired when you enter a section and I pass the list item of the section
  },
});

$("#go-award").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#awards").offset().top,
    },
    1200
  );
});

$("#go-contact").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top,
    },
    1200
  );
});
