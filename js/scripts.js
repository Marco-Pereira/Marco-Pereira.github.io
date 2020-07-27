
function Post(host, controllerName, value)
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            alert("Added");
        }
    };
    request.open("POST", host+"/api/"+controllerName);
    request.setRequestHeader("Content-type", "text/json");
    request.send(JSON.stringify(value));
}

var btn = document.getElementById("btn");
var nameInput = document.getElementById("name-input");
var nameSpan = document.getElementById("name-error-span");

btn.addEventListener("click", ()=>{
    var nameValue = nameInput.value;
    if(nameValue == "")
    {
        alert ("fail");
        nameSpan.style.setProperty("display", "block");
    }
    else
    {
        nameSpan.style.setProperty("display", "none");
        var value = {"name":nameValue};
        Post("https://localhost44353", "dietaryrestriction", value)
        
    }
});