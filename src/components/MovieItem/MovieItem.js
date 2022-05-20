import React, { Component, useEffect } from 'react';
import './MovieItem.css';
let imageStyle={
    objectFit:"cover",
    width:'50%'
}

function MovieItem({ Title, Year, Poster }) {
    // const { title, year, poster } = this.props;
    
    return (
        <article className="movie-item">
            <img  id='user_src_input' className="movie-item__poster" style={imageStyle} src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button type="button" className="movie-item__add-button">Добавить в список</button>
            </div>
        </article>
    );

}
export default MovieItem;