import React, { Component, useEffect } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
// let api=(searchTerm)=>{
//     fetch(`http://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=ecf4742c`)
//     .then(data=>{
//         return data.json()
//     })
//     .then(data=>{
//         console.log(data)
//     })
// }
async function loadMovies(searchTerm) {
    const URL = `https://omdbapi.com/?s=${searchTerm}&apikey=fc1fef96`;
    const res = await fetch(`${URL}`).then(data => data.json()).then(dat => console.log(dat.Search));
    //console.log(data.Search);
    //if(data.Response == "True") displayMovieList(data.Search);
}



function displayMovieList(movies) {
    let moviePoster
    let searchList = document.querySelector('.search_list').innerHTML = "";
    for (let idx = 0; idx < movies.length; idx++) {
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id = movies[idx].imdbID; // setting movie id in  data-id
        movieListItem.classList.add('search-list-item');
        if (movies[idx].Poster != "N/A")
            moviePoster = movies[idx].Poster;
        else
            moviePoster = "image_not_found.png";

        movieListItem.innerHTML = `
        <div class = "search-item-thumbnail">
            <img src = "${moviePoster}">
        </div>
        <div class = "search-item-info">
            <h3>${movies[idx].Title}</h3>
            <p>${movies[idx].Year}</p>
        </div>
        `;
        searchList.appendChild(movieListItem);
    }

}


async function apiFunc(searchTerm) {
    const response = await fetch(`https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`);
    const rates = await response.json();
    return rates;
}

function Movies() {
    let demoState = {
        movies: [],
        searchmovies: []
    }
    const [state, setState] = React.useState([])
    apiFunc().then(data => {
        demoState.movies = data.Search
        setState(
            data.Search.filter((data) => {
                if (data.Poster != 'N/A') {
                    return data
                }

            })
        )
    })
    
    return (
        <>
            <ul className="movies">
                {state.filter(x=>x.Title.toUpperCase().includes('')).map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        </>

    );

}

export default Movies;