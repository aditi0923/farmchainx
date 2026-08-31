// ==========================================
// LOGIN REDIRECTION
// ==========================================

function loginRedirect(event) {

    event.preventDefault();

    // Get email
    let email = document.querySelector("input[type='email']").value;

    // Get selected role
    let role = document.getElementById("role").value;

    // Store user information
    localStorage.setItem("email", email);
    localStorage.setItem("role", role);


    // =========================
    // FARMER
    // =========================

    if (role === "farmer") {

        window.location.href =
            "pages/farmer/farmerdashboard.html";
    }


    // =========================
    // CONSUMER
    // =========================

    else if (role === "consumer") {

        window.location.href =
            "pages/consumer/consumer.html";
    }


    // =========================
    // TRANSPORTER
    // =========================

    else if (role === "transporter") {

        window.location.href =
            "pages/transporter/transporter.html";
    }


    // =========================
    // ADMIN
    // =========================

    else if (role === "admin") {

        window.location.href =
            "pages/admin/admin.html";
    }

}



// ==========================================
// SIGNUP REDIRECTION
// ==========================================

function redirectDashboard(event) {

    event.preventDefault();


    // Get user information
    let email =
        document.querySelector("input[type='email']").value;

    let role =
        document.getElementById("role").value;


    // Get passwords
    let password =
        document.getElementById("password").value;

    let confirmPassword =
        document.getElementById("confirmPassword").value;


    // =========================
    // CHECK PASSWORD
    // =========================

    if (password !== confirmPassword) {

        alert("Passwords do not match!");

        return;
    }


    // Store user information
    localStorage.setItem("email", email);
    localStorage.setItem("role", role);


    // =========================
    // FARMER
    // =========================

    if (role === "farmer") {

        window.location.href =
            "pages/farmer/farmerdashboard.html";
    }


    // =========================
    // CONSUMER
    // =========================

    else if (role === "consumer") {

        window.location.href =
            "pages/consumer/consumer.html";
    }


    // =========================
    // TRANSPORTER
    // =========================

    else if (role === "transporter") {

        window.location.href =
            "pages/transporter/transporter.html";
    }


    // =========================
    // ADMIN
    // =========================

    else if (role === "admin") {

        window.location.href =
            "pages/admin/admin.html";
    }

}