// Contact Form Validation

const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const formMsg = document.getElementById("form-msg");

form.addEventListener("submit", function(e){

    e.preventDefault();

    formMsg.textContent = "";

    // Name Validation
    if(nameInput.value.trim() === ""){
        showError("Please enter your name");
        return;
    }

    // Email Validation
    if(!validateEmail(emailInput.value.trim())){
        showError("Please enter a valid email");
        return;
    }

    // Message Validation
    if(messageInput.value.trim().length < 5){
        showError("Message must be at least 5 characters");
        return;
    }

    // Success
    formMsg.style.color = "green";
    formMsg.textContent = "✅ Message Sent Successfully";

    form.reset();

});

function showError(message){

    formMsg.style.color = "red";
    formMsg.textContent = message;

}

function validateEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

// Mobile Menu

let menuIcon = document.querySelector("#menu-icon");

let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {

    navbar.classList.toggle("active");

    if(menuIcon.classList.contains("fa-bars")){

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    }else{

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

};