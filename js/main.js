// Menu souligné

function navbarMagicline() {
  var $el,
    leftPos,
    newWidth,
    $mainNav = $(".navbar-nav");

  $mainNav.append("<li id='magic-line'></li>");
  var $magicLine = $("#magic-line");

  $magicLine
    .width($(".active").width() /2)
    .css("left", $(".active .nav-link").position().left + $magicLine.width())
    .data("origLeft", $magicLine.position().left)
    .data("origWidth", $magicLine.width());

  $(".navbar-nav li .nav-link").hover(
    function() {
      $(".nav-link").css({"font-family": "Poppins-Medium"});
      $(this).css({"font-family": "Poppins-Bold"});
    },
  );

  function moveToAbrasif(){
    $el = $("#categ1-tab");
      newWidth = $el.parent().width() / 2;
      leftPos = $el.position().left + newWidth / 2;
      $magicLine.stop().animate({
        left: leftPos,
        width: newWidth
      });
  };

  $(".navbar-nav li .nav-link").hover(
    function() {
      $el = $(this);
      newWidth = $el.parent().width() / 2;
      leftPos = $el.position().left + newWidth / 2;
      $magicLine.stop().animate({
        left: leftPos,
        width: newWidth
      });
    },
  );

  $(".abrasifs-menu").hover(
    function() {moveToAbrasif();
    },
  );

  $(".product-btn").click(
    function() {moveToAbrasif();
    },
  );

  $(".navbar-nav li .nav-link").click(
    function() {
      $el = $(this);
      newWidth = $el.parent().width() / 2 ;
      leftPos = $el.position().left + newWidth / 2;
      $magicLine.stop().animate({
        left: leftPos,
        width: newWidth
      });

      $("html, body").animate({ scrollTop: 0 }, "slow");

      $("#product-page").addClass("hide");
      $(".tab-pane").removeClass("hidden");

    },
  );

  $(".navbar, .abrasifs-menu").mouseout(
    function() {
      $el = $(".navbar-nav li .active");
      newWidth = $el.parent().width() / 2;
      leftPos = $el.position().left + newWidth / 2;
      $magicLine.stop().animate({
        left: leftPos,
        width: newWidth
      });
    },
  );
};
navbarMagicline();

$(".nav-link").hover(function() {
  $(".abrasifs-menu").addClass("hidden");
  $(".decoupe-jet-deau .categ-title, .aerogommage .categ-title").removeClass("invisible");
});

$(".tab-pane").hover(function() {
  $(".decoupe-jet-deau .categ-title, .aerogommage .categ-title").removeClass("invisible");
});

$("#categ1-tab").hover(function() {
  $(".abrasifs-menu").removeClass("hidden");
  $(".decoupe-jet-deau .categ-title, .aerogommage .categ-title").addClass("invisible");
});

$(".abrasifs-menu").hover(function() {
  $(".nav-link").removeClass("active");
  $("#categ1-tab").addClass("active");
});



// choix d'abrasifs
$(".abrasifs-menu .left").click(
  function() {
    $(".nav-link").removeClass("active");
    $("#categ1-tab").addClass("active");
    $(".tab-pane").removeClass("active");
    $(".tab-pane").removeClass("show");
    $("#categ1").addClass("active");
    $("#categ1").addClass("show");
    $(".decoupe-jet-deau").removeClass("hide");
    $(".aerogommage").addClass("hide");
    $(".abrasifs-menu").toggleClass("hidden");
  },
);

$(".abrasifs-menu .right").click(
  function() {
    $(".nav-link").removeClass("active");
    $("#categ1-tab").addClass("active");
    $(".tab-pane").removeClass("active");
    $(".tab-pane").removeClass("show");
    $("#categ1").addClass("active");
    $("#categ1").addClass("show");
    $(".aerogommage").removeClass("hide");
    $(".decoupe-jet-deau").addClass("hide");
    $(".abrasifs-menu").toggleClass("hidden");

    $(".abrasifs-menu").hover(function() {
      $(this).removeClass("hidden");
       },function() {
          $(this).addClass("hidden");
       }
    );

  },
);

//menu abrasifs
if ($('#product-page').hasClass('show')) {
  $('.categ-title').addClass('tiny');
} else {
  // Shrink menu when scrolls down
  $(window).on("scroll touchmove", function () {
    $('.categ-title').toggleClass('tiny', $(document).scrollTop() > 0);
  });
}


// Pour tronquer les textes des friches produits
var myTag = $('.truncate').text();
if (myTag.length > 170) {
  var truncated = myTag.trim().substring(0, 170).split(" ").slice(0, -1).join(" ") + "…";
  $('.truncate').text(truncated);
}

// Slider menu
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


//Go to products depuis l'index
$(".product-btn").click(
  function() {
    $("#product-page").removeClass("hide");
    $(".tab-pane").addClass("hidden");

    $(".nav-link").removeClass("active");
    $("#categ1-tab").addClass("active");
    $(".decoupe-jet-deau .categ-title, .aerogommage .categ-title").addClass("invisible");

    $("html, body").animate({ scrollTop: 0 }, "slow");
  },
);

