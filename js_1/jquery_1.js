$(document).ready(function(){
    $("h1").css({"color":"red", "fontSize":"4rem"});
    
    $("#p11").on("click", function(){
      $(this).hide();
    });

    /*$("h2").hover(function(){
        alert(("i am here: ") + $("#p2").text());
    });

    $("h2").hover(function(){
        alert(("i am here: ") + $("#p2").html());
    });*/

    $("#btn1").click(function(){
        $("#p3").attr("href", "https://www.google.com");
    });

    $("#btn1").click(function(){
        $("#p3").attr(
            "href", "https://www.google.com",
            "name", "google site"
        );
    });

    $("#p4").click(function(){
        $(this).append("welcome ");
    });

    $("#p5").click(function(){
        $(this).prepend("welcome ");
    });

    $("#p6").click(function(){
        $(this).before("welcome ");
    });

    $("#p7").click(function(){
        $(this).after("welcome ");
    });

    $("#p7").hover(function(){
        $(this).addClass("p7");
    });

    $("#div1").mouseenter(function(){
        $(this).width(500).height(500);
    });

});

$(function() {
    $("#btn").click(function() {
        $("#p1").html("i appear because the button was clicked.");
    });
    
});
