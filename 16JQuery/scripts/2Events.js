$("document").ready(function () {  //exectes when html file is compltely loaded

 
//   $("button").click(function () {
//     //btn click event in jquery
//     $("#img1").css("width", "40%");
//   });

//   $("button").dblclick(function () {
//     //btn double click event in jquery
//     $("#img1").css("width", "50%");
//   });

//   $("#img").mouseenter(function () {
//     //img mouse hover event in jquery
//     $("#img1").css("width", "50%");
//   });

//   $("#img").mouseleave(function () {
//     //img mouse hover leave event in jquery
//     $("#img1").css("width", "50%");
//   });
  
    $('#img1').hover(func1,func2) //mouse enter and leave in a single method

    function func1(){
        //mouse enter
        $("#img1").css("width", "50%");
    }

    function func2(){
        //mouse leave
        $("#img1").css("width", "30%");
    }


});
