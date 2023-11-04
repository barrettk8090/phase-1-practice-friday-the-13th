fetch("http://localhost:3000/movies")
.then((r) => r.json())
.then(data => {
    const movies = data;
    movies.forEach((movie => createMovieImgForNav(movie)));
});


function createMovieImgForNav(movie){
    const nav = document.querySelector("#movie-list")
    const img = document.createElement("img");

    nav.appendChild(img);
    img.src = movie["image"];
}


fetch("http://localhost:3000/movies/1",{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify()
  })
.then((r) => r.json())
.then(data => {
    const movie = data;
    addMovieToMain(movie)});


function addMovieToMain(movie){
    const title = document.querySelector("#title");
    const releaseYear = document.querySelector("#year-released");
    const description = document.querySelector("#description");
    const image = document.querySelector("#detail-image");

    title.textContent = movie.title;
    releaseYear.textContent = movie.release_year;
    description.textContent = movie.description;
    image.src = movie.image;
}

