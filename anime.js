const params = new URLSearchParams(window.location.search);
let name = params.get("name");

//    data through JASON 
let anime = animeData[name];

//  safety check
if(!anime){
  alert("Anime not found!");
  console.log("Available:", Object.keys(animeData));
}

// data show karo
document.getElementById("animeTitle").innerText = name;
document.getElementById("animeImg").src = anime.img;
document.getElementById("animeRating").innerText = anime.rating;
document.getElementById("animeDesc").innerText = anime.desc;
document.getElementById("animeTags").innerText = anime.tags;


//  Seasons
document.getElementById("heroBanner").style.backgroundImage =
  "url(" + anime.img + ")";

document.getElementById("animeTitleHero").innerText = name;
document.getElementById("animeRatingHero").innerText = anime.rating;

 

let seasonContainer = document.getElementById("seasonContainer");

// duplicate avoid
seasonContainer.innerHTML = "";

anime.seasons.forEach(season => {

  let div = document.createElement("div");
  div.classList.add("season");

  let title = document.createElement("h4");
  title.innerText = season.name;

  let ul = document.createElement("ul");

  season.episodes.forEach((ep, index) => {
    let li = document.createElement("li");
    li.innerText = "Episode " + (index + 1) + " - " + ep;
    ul.appendChild(li);
  });

  div.appendChild(title);
  div.appendChild(ul);
  seasonContainer.appendChild(div);
});


//  Trailer


function openTrailer(){

  if(!anime.trailer){
    alert("Trailer not available!");
    return;
  }

  //  Direct YouTube open
  window.open(
    "https://www.youtube.com/watch?v=" + anime.trailer,
    "_blank"
  );
}

//  debug
console.log("Name:", name);
console.log("Data:", anime);