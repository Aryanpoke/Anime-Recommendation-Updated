
// ========================================
// VARIABLES
// ========================================

let generatedOTP = null;

let currentUser = null;


// ========================================
// SHOW STEP
// ========================================

function goToStep(stepNumber) {

    document.querySelectorAll(".step").forEach(step => {

        step.classList.remove("active");

    });

    document
        .getElementById("step" + stepNumber)
        .classList.add("active");

}


// ========================================
// STEP 1
// CHECK USERNAME & GENERATE OTP
// ========================================

function sendOTP() {

    const username =
        document.getElementById("username").value.trim();

    const message =
        document.getElementById("usernameMessage");

    message.textContent = "";


    // Check empty username

    if (username === "") {

        message.textContent =
            "Please enter your username.";

        return;

    }


    // Get registered user

    const savedUser =
        JSON.parse(localStorage.getItem("animeUser"));


    // Check account

    if (!savedUser) {

        message.textContent =
            "Account not found. Please register first.";

        return;

    }


    // Check username

    if (
        username.toLowerCase() !==
        savedUser.username.toLowerCase()
    ) {

        message.textContent =
            "Username not found.";

        return;

    }


    // Save current user

    currentUser = savedUser;


    // Generate 6 digit OTP

    generatedOTP =
        Math.floor(
            100000 +
            Math.random() * 900000
        );


    // Show OTP

    document.getElementById("generatedOTP")
        .textContent = generatedOTP;


    // Move to OTP step

    goToStep(2);

}


// ========================================
// STEP 2
// VERIFY OTP
// ========================================

function verifyOTP() {

    const enteredOTP =
        document.getElementById("otp").value.trim();

    const message =
        document.getElementById("otpMessage");

    message.textContent = "";


    // Empty OTP

    if (enteredOTP === "") {

        message.textContent =
            "Please enter the OTP.";

        return;

    }


    // Verify OTP

    if (enteredOTP !== generatedOTP.toString()) {

        message.textContent =
            "Incorrect OTP. Please try again.";

        return;

    }


    // OTP correct

    goToStep(3);

}


// ========================================
// STEP 3
// RESET PASSWORD
// ========================================

function resetPassword() {

    const newPassword =
        document.getElementById("newPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const message =
        document.getElementById("passwordMessage");

    message.textContent = "";


    // Empty password

    if (
        newPassword === "" ||
        confirmPassword === ""
    ) {

        message.textContent =
            "Please fill both password fields.";

        return;

    }


    // Password length

    if (newPassword.length < 6) {

        message.textContent =
            "Password must contain at least 6 characters.";

        return;

    }


    // Password match

    if (newPassword !== confirmPassword) {

        message.textContent =
            "Passwords do not match.";

        return;

    }


    // Update password

    currentUser.password = newPassword;


    // Save updated user

    localStorage.setItem(
        "animeUser",
        JSON.stringify(currentUser)
    );


    // Clear login state

    localStorage.removeItem("isLoggedIn");

    localStorage.removeItem("currentUser");


    // Show success

    goToStep(4);

}


// ========================================
// SHOW / HIDE PASSWORD
// ========================================

function togglePassword(inputId, icon) {

    const input =
        document.getElementById(inputId);


    if (input.type === "password") {

        input.type = "text";

        icon.classList.remove("fa-eye");

        icon.classList.add("fa-eye-slash");

    } else {

        input.type = "password";

        icon.classList.remove("fa-eye-slash");

        icon.classList.add("fa-eye");

    }

}


// ========================================
// GO TO LOGIN
// ========================================

function goToLogin() {

    window.location.href = "Login.html";

}
