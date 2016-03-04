$(document).ready(function(){
    $(".navbar").hide(0).delay(1300).fadeIn(1000);
    $("#arrow").hide(0).delay(1300).fadeIn(1000);
    $("#arrow").mouseenter(function() {
        $(this).effect("bounce", 1000);
    });
    $("#sugar-logo").hide(0).fadeIn(2500);
    console.log("confirmation");
});