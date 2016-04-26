$(document).ready(function(){

    // $(window).scroll(function(){
    //     if($(this).scrollTop() < 100){
    //         $('.scroll-up').fadeOut(30);
    //         alert("hello");
    //     }else{
    //         $(".scroll-up").fadeIn(30);
    //         alert("hello");

    //     }
    // });

    // $(".scroll-up").click(function(){
    //     $("html, body").animate({scrollTop : 0}, 500);
    //     alert("hello");
    //     return false;
    // });
    $(".intro-tabs").click(function(){
        $(this).addClass("current-tab");
        $(this).siblings(".intro-tabs").removeClass("current-tab");
    });
    $("#intro-main").click(function(){
        $("#intro-info-main").show()
        $("#intro-info-hobbies").hide();
        $("#intro-info-education").hide();
        $("#intro-info-goals").hide();
    });
    $("#intro-hobbies").click(function(){
        $("#intro-info-hobbies").css("visibility", "visible");
        $("#intro-info-main").hide()
        $("#intro-info-hobbies").show();
        $("#intro-info-education").hide();
        $("#intro-info-goals").hide();

    });
    $("#intro-education").click(function(){
        $("#intro-info-education").css("visibility", "visible");
        $("#intro-info-main").hide()
        $("#intro-info-hobbies").hide();
        $("#intro-info-education").show();
        $("#intro-info-goals").hide();

    });
    $("#intro-goals").click(function(){
        $("#intro-info-goals").css("visibility", "visible")
        $("#intro-info-main").hide()
        $("#intro-info-hobbies").hide();
        $("#intro-info-education").hide();
        $("#intro-info-goals").show();
    });
});
