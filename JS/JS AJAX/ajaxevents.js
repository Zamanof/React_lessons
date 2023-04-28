// onload, onloadend, onerror

let request;

if (window.XMLHttpRequest){
    request = new XMLHttpRequest();
}
else{
    request = new ActiveXObject("Microsoft.XMLHTTP");
}


request.open("GET", "person.json");
// request.onreadystatechange = function () {
//     if(request.readyState === 4 && request.satus == 200){
//         alert("OK")
//     }
// }

request.onload = function(){
    if(request.status === 200){
        alert(request.response)
    }
    if (request.status === 404){
        alert("404 not found")
    }
}

request.onloadend = function(event){
    alert(`Loaded ${event.loaded}`)
}

request.onerror = function(){
    alert("Error")
} 


request.send();