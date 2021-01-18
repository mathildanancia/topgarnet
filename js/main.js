// Menu soouligné

function navbarMagicline() {
  var $el,
    leftPos,
    newWidth,
    $mainNav = $(".navbar-nav");

  $mainNav.append("<li id='magic-line'></li>");
  var $magicLine = $("#magic-line");

  $magicLine
    .width($(".active").width() / 2)
    .css("left", $(".active a").position().left + $magicLine.width())
    .data("origLeft", $magicLine.position().left)
    .data("origWidth", $magicLine.width());

  // $(".navbar-nav li a").hover(
  //   function() {
  //     $el = $(this);
  //     leftPos = $el.position().left;
  //     newWidth = $el.parent().width();
  //     $magicLine.stop().animate({
  //       left: leftPos,
  //       width: newWidth
  //     });
  //   },
  //   function() {
  //     $magicLine.stop().animate({
  //       left: $magicLine.data("origLeft"),
  //       width: $magicLine.data("origWidth")
  //     });
  //   }
  // );
  $(".navbar-nav li a").click(
    function() {
      $el = $(this);
      newWidth = $el.parent().width() / 2 ;
      leftPos = $el.position().left + newWidth / 2;
      $magicLine.stop().animate({
        left: leftPos,
        width: newWidth
      });
    },

  );
};
navbarMagicline();


// Pour tronquer les textes des friches produits
var myTag = $('.truncate').text();
if (myTag.length > 170) {
  var truncated = myTag.trim().substring(0, 170).split(" ").slice(0, -1).join(" ") + "…";
  $('.truncate').text(truncated);
}



if ($('#product-page').hasClass('show')) {
  $('.categ-title').addClass('tiny');
} else {
  // Shrink menu when scrolls down
  $(window).on("scroll touchmove", function () {
    $('.categ-title').toggleClass('tiny', $(document).scrollTop() > 0);
  });
}


// Slider menu
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
