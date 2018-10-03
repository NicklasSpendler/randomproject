var username = document.querySelector("#username");
var password = document.querySelector("#password");
var button = document.querySelector("#submit");



button.addEventListener("click",function(){
    if (username.value == "diller" && password.value == "diller"){
        console.log("du er logget ind");
    }else{
        console.log("du er ikke logget ind");
    }
})
