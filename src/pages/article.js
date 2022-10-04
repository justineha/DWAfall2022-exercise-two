import React, { useMemo } from "react";
import { useParams } from "react-router";
import Data from "../components/data";

function Article() {
    const {id} = useParams();
    const articleData = Data.find((article) => article.id === id);

    const articleDate = useMemo(() => {
        if (!articleData) return "";
        const parsedDate = new Date(articleData.publishedDate)
        return parsedDate.toDateString();
     }, [articleData]);

    return (
        <main className="article">
            <header
                className="headercontent"
                style={{
                    backgroundImage: `url('${articleData.image.url}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >     
                <h1>{articleData.title}</h1>
                <p>{articleDate}</p>
                <p className="title-blurb">{articleData.blurb}</p>
            </header>
            <section className="section--content">
                    {articleData.articleText.map((text, i) => {
                        const type = text.type;
                        switch(type) {
                           case "p":
                                return <p key={i}>{text.data}</p>; /* every single element in react needs a unique identifier*/
                            case "h1":
                                return <h1 key={i}>{text.data}</h1>;
                            case "h2":
                                return <h2 key={i}>{text.data}</h2>;
                            case "h3":
                                return <h3 key={i}>{text.data}</h3>;
                            default:
                                return <h4 key={i}>{text.data}</h4>;
                        }
                    })}
            </section>
        </main>
    );
}

export default Article;