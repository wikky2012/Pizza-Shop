$(document).ready(function(){
    $("form#regist").submit(function(event){
        
        var inputEmail = $("input#email").val();
        var inputName = $("input#name").val();
        var inputPassword = $("input#password").val();

        if($("input#email").val() && $("input#name").val() && $("input#password").val()){
            alert("Welcome "+ inputName);
            
            // $("#output").text("Welcome" + inputName);
            
        }
        document.getElementById("submit").addEventListener("click",myFuction);
        function myFunction(){
            window.locate.href="http://order.html";
        }
    });
    
});