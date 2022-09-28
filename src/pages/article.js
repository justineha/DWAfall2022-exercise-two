import React from "react";
import { useParams } from "react-router";
import Data from '../components/data';

function Article() {
    const {id} = useParams();

    const articleData = Data.find((article) => article.id === id);

    return (
        <main>
            <header>
                <div className="headercontent">
                    <h1>{articleData.title}</h1>
                    <p className="title-date">Tuesday, August 22, 2022</p>
                    <p className="title-blurb">Note that this is an Article Blurb. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </header>
            <section>
                <div className="sectioncontent">
                    <p className="section-blurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas volutpat. Mattis molestie a iaculis at erat pellentesque adipiscing. In eu mi bibendum neque egestas congue quisque. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Euismod elementum nisi quis eleifend quam adipiscing. Quis hendrerit dolor magna eget est. Leo urna molestie at elementum eu facilisis sed. Nisi scelerisque eu ultrices vitae. Sem integer vitae justo eget magna fermentum iaculis eu non. Varius sit amet mattis vulputate enim nulla. Quis commodo odio aenean sed adipiscing. Felis bibendum ut tristique et egestas quis ipsum suspendisse.</p>
                    <h2>Header Two Inserted</h2>
                    <p className="section-paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas volutpat. Mattis molestie a iaculis at erat pellentesque adipiscing. In eu mi bibendum neque egestas congue quisque. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Euismod elementum nisi quis eleifend quam adipiscing. Quis hendrerit dolor magna eget est. Leo urna molestie at elementum eu facilisis sed. Nisi scelerisque eu ultrices vitae. Sem integer vitae justo eget magna fermentum iaculis eu non. Varius sit amet mattis vulputate enim nulla. Quis commodo odio aenean sed adipiscing. Felis bibendum ut tristique et egestas quis ipsum suspendisse.</p>
                    <h3>Header Three Inserted</h3>
                    <p className="section-paragraph2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas volutpat. Mattis molestie a iaculis at erat pellentesque adipiscing. In eu mi bibendum neque egestas congue quisque. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Euismod elementum nisi quis eleifend quam adipiscing. Quis hendrerit dolor magna eget est. Leo urna molestie at elementum eu facilisis sed. Nisi scelerisque eu ultrices vitae. Sem integer vitae justo eget magna fermentum iaculis eu non. Varius sit amet mattis vulputate enim nulla. Quis commodo odio aenean sed adipiscing. Felis bibendum ut tristique et egestas quis ipsum suspendisse.</p>
                </div>
            </section>
        </main>
    );
}

export default Article;