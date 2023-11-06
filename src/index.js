let currentMovie;


//Challenge 1: For each movie returned from http://localhost:3000/movies create an image and add it to the movie-list nav element.

fetch("http://localhost:3000/movies")
.then((r) => r.json())
.then(data => {
    const movies = data;
    movies.forEach((movie => createMovieImgForNav(movie)));
    addMovieToMain(movies[0]);
    hookUpWatchedButton();
});

function createMovieImgForNav(movie){
    const nav = document.querySelector("#movie-list")
    const img = document.createElement("img");

    nav.appendChild(img);
    img.src = movie["image"];

    img.addEventListener("click", function () {
        addMovieToMain(movie);
    })
} 

//Challenge 2: As soon as the page loads, we should see the details of the first movie in the dataset.

//Challenge 3: When you click on each movie image in the top nav, you should populate the detail area with the image, title, release_year, description, watched, and blood_amount for the movie that was clicked.
// If the value of 'watched' is false, the button should say 'Unwatched'. If the value is true, then the button should say 'Watched'.

function addMovieToMain(movie){
    currentMovie = movie;
    
    const title = document.querySelector("#title");
    const releaseYear = document.querySelector("#year-released");
    const description = document.querySelector("#description");
    const image = document.querySelector("#detail-image");
    const watched = document.querySelector("#watched");
    const bloodAmount = document.querySelector("#amount");

    title.textContent = movie.title;
    releaseYear.textContent = movie.release_year;
    description.textContent = movie.description;
    image.src = movie.image;
    bloodAmount.textContent = movie.blood_amount;
    watched.textContent = movie.watched ? "Watched" : "Unwatched";//ternary accounts for true/false
}

//Challenge 4: When you click on the button in the details it should toggle between Watched or Unwatched depending on the value of watched for the movie currently being displayed.

// The watched value should stay the same when you click between the different movies.
function hookUpWatchedButton(){
    let watchedButton = document.querySelector("#watched");
    watchedButton.addEventListener("click", function () {
        currentMovie.watched = !currentMovie.watched;
        watchedButton.textContent = currentMovie.watched ? "Watched" : "Unwatched";
    })
}


// //Challenge 5: On the right side there's a form that allows the user to enter a number of blood drops to add to each movie (don't ask why). For each movie, I should be able to add more drops.

// Example:

// ~~~ If the value is 0 and I enter 10, then number of drops for the movie should be 10.
// ~~~ If the value is 20 and I enter 5, then the number of drops for the movie should be 25.
// The blood amount value should stay the same when you click between the different movies.
const bloodForm = document.querySelector("#blood-form");

bloodForm.addEventListener("submit", function(e){
    e.preventDefault();

    const amountToAdd = e.target["blood-amount"].value
    currentMovie.blood_amount += parseInt(amountToAdd);

    document.querySelector("#amount").textContent = currentMovie.blood_amount;

    e.target.reset();
})
