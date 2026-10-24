function searchAnime(){
  let input = document.getElementById("searchBox").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let title = card.querySelector("h3").innerText.toLowerCase();

    if(title.includes(input)){
      card.style.display = "flex"; // 🔥 better for layout
    } else {
      card.style.display = "none";
    }
  });
}


function filterAnime(genre){
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if(genre === "all"){
      card.style.display = "flex";
    }
    else{
      if(card.classList.contains(genre)){
        card.style.display = "flex";
      }else{
        card.style.display = "none";
      }
    }
  });
}


function randomAnime(){
  let cards = document.querySelectorAll(".card");

  // 🔥 sirf visible cards lo
  let visibleCards = Array.from(cards).filter(card => 
    card.style.display !== "none"
  );

  if(visibleCards.length === 0){
    alert("No anime available 😢");
    return;
  }

  let random = Math.floor(Math.random() * visibleCards.length);

  let link = visibleCards[random].querySelector("a").href;

  window.location.href = link;
}

// ========================================
// LOAD PROFILE PHOTO ON MAIN PAGE
// ========================================

function loadHeaderProfile() {

    const savedUser =
        JSON.parse(localStorage.getItem("animeUser"));

    const profileLogo =
        document.querySelector(".profile-logo");

    const profileImage =
        document.getElementById("headerProfilePicture");


    if (!savedUser || !profileLogo || !profileImage) {

        return;

    }


    if (savedUser.profilePicture) {

        profileImage.src =
            savedUser.profilePicture;

        profileLogo.classList.add("has-image");

    } else {

        profileLogo.classList.remove("has-image");

    }

}


// Load profile photo

loadHeaderProfile();