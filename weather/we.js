
let apiId = "";
let url = `https://api.openweathermap.org/data/2.5/weather?q=Jhalawar,in&appid=${apiId}`;


// let response =  fetch(url);

// if (response.ok) { // if HTTP-status is 200-299
//     // get the response body (the method explained below)
//     let json =  response.json();
// } else {
//     alert("HTTP-Error: " + response.status);
// }

// console.log(json);

let xhr = new XMLHttpRequest();
xhr.open(`GET`, `${url}`, true);


xhr.onload = function(){
    if(this.status === 200){
        let a = JSON.parse(this.responseText);
        console.log(a);
    }
}

xhr.send();