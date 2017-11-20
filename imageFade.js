
$(document).ready(function(){

    function hideImages() {
        $("#scala").hide();
        $("#javascript").hide();
        $("#css").hide();
        $("#html5").hide();   
        $("#microsoft").hide();
    }


    function showImages() {
        $("#scala").fadeIn(1000);
        $("#javascript").delay(1000).fadeIn(1000);
        $("#css").hide().delay(2000).fadeIn(1000);
        $("#html5").hide().delay(3000).fadeIn(1000);
        $("#microsoft").hide().delay(4000).fadeIn(1000);
    }

    hideImages(); 
    showImages();
});