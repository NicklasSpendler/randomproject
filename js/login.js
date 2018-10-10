var usernameinput = document.querySelector("#username");
var passwordinput = document.querySelector("#password");

var username = "diller";
var password = "diller";

var button = document.querySelector("#submit");



button.addEventListener("click",function(){
    if (usernameinput.value == "diller" && passwordinput.value == "diller"){
        console.log("du er logget ind");
    }else{
        console.log("du er ikke logget ind");
    }
})
