let url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem";

let showCards = () => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw response.status;
      }
    })
    .then((songs) => {
      let container = document.querySelector("#searchResults .row");
      container.innerHTML = "";
      for (const song of songs.data) {
        container.innerHTML += `<div class="card d-flex flex-column">
            <img src="${song.album.cover_medium}" alt="album_cover">
            <div class="cardInfo">
              <h5>${song.title}</h5>
              <p>${song.artist.name}</p>
            </div>
            `;
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

window.onload = showCards;

let searchSongs = () => {
  let search = document.querySelector("#searchField").value;
  url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search.toLowerCase()}`;
  showCards();
};
