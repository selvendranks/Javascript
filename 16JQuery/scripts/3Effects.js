$('document').ready(function(){
    $('#btn1').click(function(){
        $("#img1").hide(2000); //hide image (takes 2000ms to hide completely)
    })

    $('#btn2').click(function(){
        $("#img1").show(2000); //show image
    })

    $('#btn3').click(function(){
        $("#img1").toggle(3000); //hide image
    })

    $('#btn4').click(function(){
        $("#img1").fadeIn(2000); // fade in image
    })

    $('#btn5').click(function(){
        $("#img1").fadeOut(2000); //fade out image
    })

    $('#btn6').click(function(){
        $("#img1").fadeToggle(2000); //fade toggle image
    })

    $('#btn7').click(function(){
        $("#img1").fadeTo(2000,0.2); //it takes alpha value as argument
    })
})