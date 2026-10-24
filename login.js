// ========================================
// PASSWORD SHOW / HIDE
// ========================================

const eye = document.getElementById("eye");
const password = document.getElementById("password");

eye.onclick = () => {

    if (password.type === "password") {

        password.type = "text";

        eye.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        password.type = "password";

        eye.classList.replace("fa-eye-slash", "fa-eye");

    }

};


// ========================================
// LOGIN FORM
// ========================================

const loginForm = document.getElementById("loginForm");


// ========================================
// LOGIN FUNCTION
// ========================================

loginForm.addEventListener("submit", function(event) {

    // Page reload hone se rokna
    event.preventDefault();


    // ====================================
    // GET USERNAME & PASSWORD
    // ====================================

    const username =
        document.getElementById("username").value.trim();

    const passwordValue =
        document.getElementById("password").value;


    // ====================================
    // ERROR MESSAGE ELEMENTS
    // ====================================

    let usernameError =
        document.getElementById("usernameError");

    let passwordError =
        document.getElementById("passwordError");


    // Agar error elements nahi hain
    // to automatically create karenge

    if (!usernameError) {

        usernameError = document.createElement("p");

        usernameError.id = "usernameError";

        usernameError.style.color = "red";
        usernameError.style.fontSize = "14px";
        usernameError.style.marginTop = "-10px";
        usernameError.style.marginBottom = "10px";

        document.getElementById("username")
            .parentElement
            .appendChild(usernameError);
    }


    if (!passwordError) {

        passwordError = document.createElement("p");

        passwordError.id = "passwordError";

        passwordError.style.color = "red";
        passwordError.style.fontSize = "14px";
        passwordError.style.marginTop = "-10px";
        passwordError.style.marginBottom = "10px";

        document.querySelector(".password")
            .appendChild(passwordError);
    }


    // Purane errors clear karo

    usernameError.textContent = "";
    passwordError.textContent = "";


    // ====================================
    // GET REGISTERED USER FROM LOCALSTORAGE
    // ====================================

    const savedUser =
        JSON.parse(localStorage.getItem("animeUser"));


    // ====================================
    // CHECK ACCOUNT EXISTS
    // ====================================

    if (!savedUser) {

        usernameError.textContent =
            "Account not found. Please register first.";

        return;
    }


    // ====================================
    // CHECK USERNAME
    // ====================================

    if (
        username.toLowerCase() !==
        savedUser.username.toLowerCase()
    ) {

        usernameError.textContent =
            "❌ Username is incorrect.";

        return;
    }


    // ====================================
    // CHECK PASSWORD
    // ====================================

    if (passwordValue !== savedUser.password) {

        passwordError.textContent =
            "❌ Password is incorrect.";

        return;
    }


    // ====================================
    // LOGIN SUCCESS
    // ====================================

    localStorage.setItem("isLoggedIn", "true");

    localStorage.setItem(
        "currentUser",
        savedUser.username
    );


    // ====================================
    // OPEN ANIME RECOMMENDATION WEBSITE
    // ====================================

    window.location.href = "project.html";

});