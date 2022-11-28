$(document).ready(function() {
    $("#animation").hide();
    console.log("jquery init done");
    $('body').css('overflow', 'hidden');
    $("#btn1").click(loadAnimation);
    $("#btn2").click(loadAnimation);
    $("#btn3").click(loadAnimation);
    $("#btn4").click(loadAnimation);
});






function loadAnimation(){
    $("#div").hide();
    $("#animation").show();
}