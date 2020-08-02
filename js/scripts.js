$(document).ready(function(){
    $("form#regist").submit(function(event){
        
        var inputEmail = $("input#email").val();
        var inputName = $("input#name").val();
        var inputPassword = $("input#password").val();
        var proceed = "Proceed to make an order!!"

        if($("input#email").val() && $("input#name").val() && $("input#password").val()){
             alert("Welcome "+ inputName +"," +proceed);

           $("#output").text("Welcome" + inputName);
           
        }
        else{
            alert("Enter all the required fields")
        }
    });
    
});

var small, medium, large;
var crispy =[ 100,1550,2550];
var stuffed = [950,1500,2230];
var glutenfree = [800,1300,2100];
var topping = 100;
var noTopping = 0;
var delivery = [50,55,60,65,80,69,65,64,28,65,24,29];
var pickYourSelf = [0];

function calculate(){
    event.preventDefault();
    var inputSize = document.getElementById("size").value;
    var typeCrust =document.getElementById("crust").value;
    var toppings =document.getElementById("top").value;
    var delivers =document.getElementById("del").value;

    if(inputSize=="small" && typeCrust=="crispy"  && toppings=="have" && delivers=="deliver"){
     var  result = crispy[0] + topping + delivery[0];
     
     $("#output").text("Your total Expense is: Ksh. " + result);
    } 
    else{
        alert("Didn't work");
    }
    
}
