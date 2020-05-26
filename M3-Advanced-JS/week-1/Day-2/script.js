window.onload = function() {

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "46b7b8bb48msh18118826d934364p1f8e03jsn798d9c136d1a"
	}
})

  .then(response => response.json())
  .then(parsedJson => {
    console.log(parsedJson)

    let albumsDiv = document.querySelector("#albums")


    let songs = parsedJson.data;
    console.log(songs)


    for (let i = 0; i < songs.length; i++) {

      let song = songs[i]
      //console.log(songs[i].title)
      albumsDiv.innerHTML =+ 
      `<div class="card col-sm-3">
        <img src="${song.album.cover_big}"class="card-img-top" alt=".."/>
        <div class="card-body">
          <h5 class="card-title">${song.title}</h5>
          <p class="card-text">${song.artist.name} - ${song.album.title} </p>
        </div>
      </div>`
      

        
    }
  })






}