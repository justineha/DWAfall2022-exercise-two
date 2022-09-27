import React from "react";

function ArticleCard ({
    blurb,
    date,
    imageAlt,
    imageSrc,
    title,
}) 

function ArticleCard( {imageAlt, imageSrc} ) {
    return (
        <div className="articleCard">
            <div className="articleCard--image">
                <img src={imageSrc} alt={imageAlt} />
            </div>
            <div className="articleCard--text">
                <h2>{title}</h2>
                <p className="date">{date}</p>
                <p className="blurb">{blurb}</p>
                <p className="link">
                    <a href="">Link</a>
                </p>
            </div>
        </div>
    )
}

export default ArticleCard