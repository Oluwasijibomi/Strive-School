fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "46b7b8bb48msh18118826d934364p1f8e03jsn798d9c136d1a"
	}
})
.then(response => response.json())
.then(convertedApiResponse => {
  console.log(convertedApiResponse)


let songs = convertedApiResponse.data;

let songName = songs[7].title;
console.log(songName);

for (i = 0; i < songs.length; i++ ){
  let song = songs[i]

  console.log(song.title);
};
})



.catch(err => {
	console.log(err);
});