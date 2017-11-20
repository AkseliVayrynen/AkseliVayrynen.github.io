/*When the visitor clicks the "OK" button, we will edit the JSON data at Firebase*/

window.onload = function() {

    var visitorCount;
    var countString = (visitorCount + 1).toString;


        function getVisitors() {
        $("button").click(function(){
            $.getJSON("https://homepage-8cd70.firebaseio.com/.json", function(data){
                $.each(data, function(x, numero){
                    $("#kokeilu").append(numero +" ");
                    visitorCount = parseInt(numero) + 1;
                    editJSON();
                });
             });
          });
        }




        function editJSON() {
            var arr = visitorCount;
            $.ajax({
                url: "https://homepage-8cd70.firebaseio.com/.json",
                type: "POST",
                data: JSON.stringify(arr),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
            });
        }

        getVisitors();

}