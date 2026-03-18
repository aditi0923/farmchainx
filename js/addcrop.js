const cropData = {
cropName: document.getElementById("cropName").value,
quantity: document.getElementById("quantity").value,
price: document.getElementById("price").value,
location: document.getElementById("location").value,
harvestDate: document.getElementById("harvestDate").value
};

fetch("http://localhost:8080/api/crops", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(cropData)
})
.then(response => response.json())
.then(data => {

document.getElementById("message").innerText = "Crop added successfully";

window.location.href = "farmerdashboard.html";

})
.catch(error => {

document.getElementById("message").innerText = "Error adding crop.";

});