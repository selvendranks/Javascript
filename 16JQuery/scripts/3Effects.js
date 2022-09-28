$("document").ready(function () {
  $("#btn1").click(function () {
    $("#img1").hide(2000); //hide image (takes 2000ms to hide completely)
  });

  $("#btn2").click(function () {
    $("#img1").show(2000); //show image
  });

  $("#btn3").click(function () {
    $("#img1").toggle(3000); //hide image
  });

  $("#btn4").click(function () {
    $("#img1").fadeIn(2000); // fade in image
  });

  $("#btn5").click(function () {
    $("#img1").fadeOut(2000); //fade out image
  });

  $("#btn6").click(function () {
    $("#img1").fadeToggle(2000); //fade toggle image
  });

  $("#btn7").click(function () {
    $("#img1").fadeTo(2000, 0.2); //it takes alpha value as argument
  });

  $("#btn8").click(function () {
    $("#img1").slideUp(2000); //image slide up
  });

  $("#btn9").click(function () {
    $("#img1").slideDown(2000); //imge slide down
  });

  $("#btn10").click(function () {
    $("#img1").slideToggle(2000); //image slide toggle
  });

  $("#btn11").click(function () {
    $("#img1").stop(); //stops the effect inbetween when running
  });


//   (selector).animate({styles},speed,easing,callback)
  $("#btn12").click(function () {
    $("#img2").animate(
      { left: "150px", opacity: "1", height: "400px", width: "400px" },  //animate
      2000,
      function () {
        $("#img2").animate(
          { right: "150px", opacity: "0", height: "200px", width: "200px" }, //animate again with call back
          3000
        );
      }
    );
  });
});
