document.getElementById("cropForm").addEventListener("submit", function(e) {

  e.preventDefault();

let email = localStorage.getItem("email");

if(!email){
    alert("User not logged in");
    return;
}
console.log("Logged in email:", email);  

const crop = {
  cropName: document.getElementById("cropName").value,
  quantity: document.getElementById("quantity").value,
  price: document.getElementById("price").value,
  location: document.getElementById("location").value,
  userEmail: email.toLowerCase()   // use variable (clean)
};

console.log("Sending crop:", crop);

  fetch("http://localhost:8080/api/crops", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(crop)
  })
  .then(response => response.json())
  .then(data => {

    console.log("Saved Crop:", data); // ✅ debug

    document.getElementById("message").innerText = "Crop added successfully!";

    const cropId = data.id;  // 🔥 VERY IMPORTANT

    const qrUrl = `http://127.0.0.1:5500/trace.html?id=${cropId}`;

    const qrDiv = document.getElementById("qrcode");

    qrDiv.innerHTML = ""; // clear old QR

    new QRCode(qrDiv, {
      text: qrUrl,
      width: 150,
      height: 150
    });

  })
  .catch(error => {
    console.error(error);
    document.getElementById("message").innerText = "Error adding crop.";
  });

});

