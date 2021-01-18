$(document).ready(function() {
  $(".btn-lilac").on("click", function(event) {
    var hash = $(this).attr("data-target"),
      target = $("#" + hash);

    event.preventDefault();
    $("html, body").animate({
        scrollTop: $(target).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  });
});
