
$(function() {
  var resize;
  resize = function() {
    var containerWidth, maxWidth;
    maxWidth = $("body").innerWidth();
    containerWidth = $(".content").innerWidth();
    return $(".content img").each(function(index) {
      var imgWidth, marginLeft;
      imgWidth = $(this).width();
      if (imgWidth > maxWidth) {
        $(this).attr("width", "" + maxWidth + "px");
        imgWidth = maxWidth;
      }
      marginLeft = (imgWidth / 2) - (containerWidth / 2);
      if (imgWidth > containerWidth) {
        return $(this).attr("style", "margin-left: -" + marginLeft + "px");
      }
    });
  };
  resize();
  return $(window).resize(function() {
    return resize();
  });
});
