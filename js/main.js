$(function () {
  $(".toggle").on("click", function () {
    if ($(".menu__item").hasClass("active")) {
      $(".menu__item").removeClass("active");
      $(this).find("a").html("<i class='fas fa-bars'></i>");
    } else {
      $(".menu__item").addClass("active");
      $(this).find("a").html("<i class='fas fa-times'></i>");
    }
  });
});
