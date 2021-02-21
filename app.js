import animeList from "./data.js";
var orderedList = document.querySelector("#anime-list");

/*
1. get list of anime - DONE
2. display the list of anime with a loop
  - same process, diff input

*/
//animeList[0]

var sortedByScoreAnimeList = animeList.sort((anime1, anime2) => anime2.score - anime1.score);


for (var i = 0; i < animeList.length; i = i + 1) {
  var anime = animeList[i]; //access (diff input)
  
  var listItem = `
  <li>
    <h2>${anime.title}</h2>
    <span>${anime.score}</span>
    <div><img src=${anime.img}></div>
  </li>`; //make
  
  orderedList.insertAdjacentHTML("beforeend", listItem); //insert
}


/** 
<li>
  <h2>--variable called animeTitle--</h2>
  <span>10.0</span>
  <div><img src="https://cdn.myanimelist.net/images/anime/1223/96541.jpg"></div>
</li>

<li>
  <h2>Title 2</h2>
  <span>10.1</span>
  <div><img src="https://cdn.myanimelist.net/images/anime/1233/96541.jpg"></div>
</li>
*/