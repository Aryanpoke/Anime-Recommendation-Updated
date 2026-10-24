// ========================================
// PROFILE PAGE
// ========================================


// ========================================
// GET USER DATA
// ========================================

let user =
    JSON.parse(localStorage.getItem("animeUser"));


// ========================================
// CHECK USER LOGIN / ACCOUNT
// ========================================

if (!user) {

    alert("No account found. Please register first.");

    window.location.href = "Login.html";

}


// ========================================
// LOAD PROFILE DATA
// ========================================

function loadProfile() {

    if (!user) return;


    // Username

    document.getElementById("username")
        .value = user.username || "";


    document.getElementById("profileUsername")
        .textContent = user.username || "User";


    // Full Name

    document.getElementById("fullName")
        .value = user.fullName || "";


    // Email

    document.getElementById("email")
        .value = user.email || "";


    // Profile Picture

    if (user.profilePicture) {

        document.getElementById("profilePicture")
            .innerHTML =
            `<img src="${user.profilePicture}"
                  alt="Profile Picture">`;

    }

}


// ========================================
// LOAD PHOTO FROM DESKTOP
// ========================================

document.getElementById("photoInput")
    .addEventListener("change", function () {

        const file = this.files[0];


        if (!file) {

            return;

        }


        // Check image

        if (!file.type.startsWith("image/")) {

            alert("Please select an image file.");

            return;

        }


        // Check file size
        // Maximum 2 MB

        if (file.size > 2 * 1024 * 1024) {

            alert("Please select an image smaller than 2 MB.");

            this.value = "";

            return;

        }


        // Read image

        const reader = new FileReader();


        reader.onload = function (event) {

            const imageData =
                event.target.result;


            // Show preview

            document.getElementById("profilePicture")
                .innerHTML =
                `<img src="${imageData}"
                      alt="Profile Picture">`;


            // Store temporarily

            user.profilePicture = imageData;

        };


        reader.readAsDataURL(file);

    });


// ========================================
// SAVE PROFILE
// ========================================

function saveProfile() {

    const fullName =
        document.getElementById("fullName")
            .value.trim();


    const email =
        document.getElementById("email")
            .value.trim();


    const message =
        document.getElementById("profileMessage");


    // Full Name validation

    if (fullName === "") {

        message.style.color = "#ef4444";

        message.textContent =
            "Please enter your full name.";

        return;

    }


    // Email validation

    if (email === "") {

        message.style.color = "#ef4444";

        message.textContent =
            "Please enter your email.";

        return;

    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        message.style.color = "#ef4444";

        message.textContent =
            "Please enter a valid email address.";

        return;

    }


    // Update user data

    user.fullName = fullName;

    user.email = email;


    // Save to localStorage

    localStorage.setItem(
        "animeUser",
        JSON.stringify(user)
    );


    // Success message

    message.style.color = "#4ade80";

    message.textContent =
        "✓ Profile saved successfully.";


    // Update username display

    document.getElementById("profileUsername")
        .textContent = user.username;

}


// ========================================
// CHANGE EMAIL
// ========================================

function changeEmail() {

    const emailInput =
        document.getElementById("email");


    emailInput.focus();

    emailInput.select();


    emailInput.style.borderColor =
        "#ff4d4d";

}


// ========================================
// LOGOUT
// ========================================

function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");


    if (!confirmLogout) {

        return;

    }


    // Remove login status

    localStorage.removeItem("isLoggedIn");

    localStorage.removeItem("currentUser");


    // Go to login

    window.location.href = "Login.html";

}


// ========================================
// DELETE ACCOUNT
// ========================================

function deleteAccount() {

    const confirmation =
        confirm(
            "Are you sure you want to delete your account?\n\n" +
            "This will permanently remove your account data."
        );


    if (!confirmation) {

        return;

    }


    // Second confirmation

    const finalConfirmation =
        confirm(
            "This action cannot be undone. Delete account?"
        );


    if (!finalConfirmation) {

        return;

    }


    // Remove account

    localStorage.removeItem("animeUser");

    localStorage.removeItem("isLoggedIn");

    localStorage.removeItem("currentUser");


    // Go to register

    alert("Your account has been deleted successfully.");

    window.location.href = "Register.html";

}


// ========================================
// LOAD PROFILE
// ========================================

loadProfile();
