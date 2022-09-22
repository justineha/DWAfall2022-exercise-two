import React from "react";

function ArticleCard( { imageAlt, imageSrc } ) {
    return (
        <div className="articleCard">
            <div className="articleCard--image">
                <img src="" alt="" />
            </div>
            <div className="articleCard--text">
                <h2>Article Title</h2>
                <p className="date">Tuesday, August 22, 2022</p>
                <p className="blurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="link">
                    <a href="">Read More</a>
                </p>
            </div>
        </div>
    )
}

export default ArticleCard