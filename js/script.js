function updateStatus(){

let status = document.getElementById("status");

if(status.innerText === "Assigned"){
status.innerText = "In Transit";
}

else if(status.innerText === "In Transit"){
status.innerText = "Delivered";
}

}