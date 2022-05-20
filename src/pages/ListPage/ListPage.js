import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ListPage.css';

function ListPage() {
    console.log("use params yeri",useParams())
    console.log("sa")
    let defaultstate = {
        movies: [
            { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ]
    }
    const [state, setstate] = React.useState(defaultstate)
    // componentDidMount() {
    //     const id = this.props.match.params;
    //     console.log(id);
    //     // TODO: запрос к сервер на получение списка
    //     // TODO: запросы к серверу по всем imdbID
    // }

    useEffect(() => {
        // const id = this.props.match.params;
        // console.log(id);
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
    });
    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список</h1>
            <ul>
                {state.movies.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <a href="https://www.imdb.com/title/tt0068646/" target="_blank">{item.title} ({item.year})</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );

}

export default ListPage;