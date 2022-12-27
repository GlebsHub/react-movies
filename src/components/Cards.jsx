import React from 'react';
import Card from "./Card";

const Cards = (props) => {
    const {movies = []} = props;

    return (
        <div className="cards">
            {movies.length ? movies.map(movie => (
                <Card key={movie.imdbID} {...movie}/>
            )) : <h4>Nothing found</h4>
            }
        </div>
    );
};

export default Cards;