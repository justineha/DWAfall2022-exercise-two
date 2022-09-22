import React from "react";
import ArticleCard from '../components/ArticleCard';
import Article from '../pages/article';

function List() {
    return (
        <main className="">
         <h1>Articles</h1>
         <ArticleCard />
         <ArticleCard />
         <ArticleCard />
         <Article />
        </main>
    );
}

export default List;