// ===============================
// WAIT FOR HTML TO LOAD
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const togglePassword = document.getElementById("togglePassword");
    const toggleConfirm = document.getElementById("toggleConfirm");


    // ===============================
    // SHOW / HIDE PASSWORD
    // ===============================

    togglePassword.addEventListener("click", function () {

        if (password.type === "password") {

            password.type = "text";

            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");

        } else {

            password.type = "password";

            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");

        }

    });


    // ===============================
    // SHOW / HIDE CONFIRM PASSWORD
    // ===============================

    toggleConfirm.addEventListener("click", function () {

        if (confirmPassword.type === "password") {

            confirmPassword.type = "text";

            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");

        } else {

            confirmPassword.type = "password";

            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");

        }

    });

});


// ===============================
// REGISTER USER
// ===============================

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const fullName =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const username =
        document.getElementById("username").value.trim();

    const passwordValue =
        password.value;

    const confirmPasswordValue =
        confirmPassword.value;


    // ===============================
    // PASSWORD CHECK
    // ===============================

    if (passwordValue !== confirmPasswordValue) {

        alert("❌ Password Error\n\nPasswords do not match!");

        return;
    }


    // ===============================
    // PASSWORD LENGTH
    // ===============================

    if (passwordValue.length < 6) {

        alert(
            "❌ Password Error\n\nPassword must contain at least 6 characters!"
        );

        return;
    }


    // ===============================
    // CHECK EXISTING USER
    // ===============================

    const existingUser =
        JSON.parse(localStorage.getItem("animeUser"));


    if (existingUser) {

        if (existingUser.username.toLowerCase() === username.toLowerCase()) {

            alert(
                "❌ Username Error\n\nThis username is already registered!"
            );

            return;
        }


        if (existingUser.email.toLowerCase() === email.toLowerCase()) {

            alert(
                "❌ Email Error\n\nThis email is already registered!"
            );

            return;
        }

    }


    // ===============================
    // CREATE USER
    // ===============================

    const user = {

        fullName: fullName,

        email: email,

        username: username,

        password: passwordValue

    };


    // ===============================
    // SAVE TO LOCAL STORAGE
    // ===============================

    localStorage.setItem(
        "animeUser",
        JSON.stringify(user)
    );


    // ===============================
    // SUCCESS
    // ===============================

    alert(
        "✅ Registration Successful!\n\nYour account has been created."
    );


    // ===============================
    // OPEN LOGIN PAGE
    // ===============================

    window.location.href = "login.html";

});

