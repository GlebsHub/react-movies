import React from 'react';

const Card = (props) => {
    const {Title: title, Year: year, imdbID: id, Type: type, Poster: poster} = props;
    return (
        <div>
            <div id={id} className="row">
                <div className="col s12 m7">
                    <div className="card">
                        {
                             poster === 'N/A'?
                                <img src="{poster"/>
                                :
                                <img src="{poster"/>
                        }
                        <div className="card-image">

                                <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>Hi</p>
                        </div>
                        <div className="card-action">
                            <a href="#">{title}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;