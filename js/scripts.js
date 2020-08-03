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
var crispy =[ 1000,1550,2550];
var stuffed = [950,1500,2230];
var glutenfree = [800,1300,2100];
var topping = [100,150,200];
var noTopping = 0;
var delivery = [50,55,60,65,80,69,65,64,28,65,24,29,80,96,58,75,100,58,69,40,85];
var pickYourSelf = [0];

function calculate(){
event.preventDefault();
var inputSize = document.getElementById("size").value;
var typeCrust =document.getElementById("crust").value;
var toppings =document.getElementById("top").value;
var delivers =document.getElementById("del").value;

if(inputSize=="small" && typeCrust=="crispy"  && toppings=="have" && delivers=="deliver"){
var  result = crispy[0] + topping[0] + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="small" && typeCrust=="crispy"  && toppings=="have" && delivers=="pick"){
var  result = crispy[0] + topping[0] + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="small" && typeCrust=="crispy"  && toppings=="without" && delivers=="deliver"){
var  result = crispy[0] + noTopping + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 
if(inputSize=="small" && typeCrust=="crispy"  && toppings=="without" && delivers=="pick"){
var  result = crispy[0] + noTopping + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 


if(inputSize=="medium" && typeCrust=="crispy"  && toppings=="have" && delivers=="deliver"){
var  result = crispy[1] + topping[1] + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="medium" && typeCrust=="crispy"  && toppings=="have" && delivers=="pick"){
var  result = crispy[1] + topping[1] + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="medium" && typeCrust=="crispy"  && toppings=="without" && delivers=="deliver"){
var  result = crispy[1] + noTopping + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 
if(inputSize=="medium" && typeCrust=="crispy"  && toppings=="without" && delivers=="pick"){
var  result = crispy[1] + noTopping + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 


if(inputSize=="large" && typeCrust=="crispy"  && toppings=="have" && delivers=="deliver"){
var  result = crispy[2] + topping[2] + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="large" && typeCrust=="crispy"  && toppings=="have" && delivers=="pick"){
var  result = crispy[2] + topping[2] + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="large" && typeCrust=="crispy"  && toppings=="without" && delivers=="deliver"){
var  result = crispy[2] + noTopping + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 
if(inputSize=="large" && typeCrust=="crispy"  && toppings=="without" && delivers=="pick"){
var  result = crispy[2] + noTopping + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 


if(inputSize=="small" && typeCrust=="stuffed"  && toppings=="have" && delivers=="deliver"){
var  result = stuffed[0] + topping[0] + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="small" && typeCrust=="stuffed"  && toppings=="have" && delivers=="pick"){
var  result = stuffed[0] + topping[0] + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="small" && typeCrust=="stuffed"  && toppings=="without" && delivers=="deliver"){
var  result = stuffed[0] + noTopping + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 
if(inputSize=="small" && typeCrust=="stuffed"  && toppings=="without" && delivers=="pick"){
var  result = stuffed[0] + noTopping + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 



if(inputSize=="medium" && typeCrust=="stuffed"  && toppings=="have" && delivers=="deliver"){
var  result = stuffed[1] + topping[1] + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="medium" && typeCrust=="stuffed"  && toppings=="have" && delivers=="pick"){
var  result = stuffed[1] + topping[1] + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="medium" && typeCrust=="stuffed"  && toppings=="without" && delivers=="deliver"){
var  result = stuffed[1] + noTopping + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 
if(inputSize=="medium" && typeCrust=="stuffed"  && toppings=="without" && delivers=="pick"){
var  result = stuffed[1] + noTopping + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 


if(inputSize=="large" && typeCrust=="stuffed"  && toppings=="have" && delivers=="deliver"){
var  result = stuffed[2] + topping[2] + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="large" && typeCrust=="stuffed"  && toppings=="have" && delivers=="pick"){
var  result = stuffed[2] + topping[2] + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="large" && typeCrust=="stuffed"  && toppings=="without" && delivers=="deliver"){
var  result = stuffed[2] + noTopping + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 
if(inputSize=="large" && typeCrust=="stuffed"  && toppings=="without" && delivers=="pick"){
var  result = stuffed[2] + noTopping + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 


if(inputSize=="small" && typeCrust=="gluten"  && toppings=="have" && delivers=="deliver"){
var  result = glutenfree[0] + topping[0] + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="small" && typeCrust=="gluten"  && toppings=="have" && delivers=="pick"){
var  result = glutenfree[0] + topping[0] + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="small" && typeCrust=="gluten"  && toppings=="without" && delivers=="deliver"){
var  result = glutenfree[0] + noTopping + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 
if(inputSize=="small" && typeCrust=="gluten"  && toppings=="without" && delivers=="pick"){
var  result = glutenfree[0] + noTopping + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 


if(inputSize=="medium" && typeCrust=="gluten"  && toppings=="have" && delivers=="deliver"){
var  result = glutenfree[1] + topping[1] + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="medium" && typeCrust=="gluten"  && toppings=="have" && delivers=="pick"){
var  result = glutenfree[1] + topping[1] + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="medium" && typeCrust=="gluten"  && toppings=="without" && delivers=="deliver"){
var  result = glutenfree[1] + noTopping + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 
if(inputSize=="medim" && typeCrust=="gluten"  && toppings=="without" && delivers=="pick"){
var  result = glutenfree[1] + noTopping + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 


if(inputSize=="large" && typeCrust=="gluten"  && toppings=="have" && delivers=="deliver"){
var  result = glutenfree[2] + topping[2] + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="large" && typeCrust=="gluten"  && toppings=="have" && delivers=="pick"){
var  result = glutenfree[2] + topping[2] + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 

if(inputSize=="large" && typeCrust=="gluten"  && toppings=="without" && delivers=="deliver"){
var  result = glutenfree[2] + noTopping + delivery[Math.floor(Math.random()*delivery.length)];

$("#output").text("Your total Expense is: Ksh. " + result);
} 
if(inputSize=="large" && typeCrust=="gluten"  && toppings=="without" && delivers=="pick"){
var  result = glutenfree[2] + noTopping + pickYourSelf[0];

$("#output").text("Your total Expense is: Ksh. " + result);
} 
else{
    // alert("Make correct selections!");
    return results;
}
}
