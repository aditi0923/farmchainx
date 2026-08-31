function updateStatus(orderId, status){

    fetch(`http://localhost:8080/api/orders/${orderId}/status`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            status: status
        })
    })
    .then(res => res.json())
    .then(() => {
        alert("Status Updated ✅");
    })
    .catch(() => {
        alert("Error updating ❌");
    });
}

function goToTracking(id) {
    window.location.href = `tracking.html?id=${id}`;
}

function assignTransporter(orderId){

    fetch(`http://localhost:8080/api/orders/${orderId}/assign?transporterEmail=ramesh@gmail.com`, {
        method: "PUT"
    })
    .then(res => res.json())
    .then(() => {
        alert("Transporter Assigned Successfully");
    })
    .catch(() => {
        alert("Error assigning transporter");
    });
}

function addCrop(){

    let cropName = document.getElementById("cropName").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;
    let location = document.getElementById("location").value;

    fetch("http://localhost:8080/api/crops", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cropName: cropName,
            quantity: quantity,
            price: price,
            location: location,
            userEmail: localStorage.getItem("email")
        })
    })
    .then(res => {
        if(!res.ok) throw new Error();
        return res.json();
    })
    .then(() => {
        alert("Crop added successfully ✅");
        window.location.href = "farmer.html";
    })
    .catch(() => {
        alert("Error adding crop ❌");
    });
}

