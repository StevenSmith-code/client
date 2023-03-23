import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArticleContainer() {
  let { id } = useParams();
  const [article, setArticle] = useState([]);
  const date = new Date(article.updated_at);
  const formattedDate = date.toLocaleString("en-US", { hour12: true });

  useEffect(() => {
    fetch(`http://localhost:9292/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, []);

  return (
    <div className="flex flex-col bg-gray-800 h-screen">
      <div className="max-w-7xl m-auto space-y-4 z-10 bg-gray-500 text-white h-screen">
        <h1 className="text-center lg:text-4xl mt-10">{article.title}</h1>
        <h2 className="text-center lg:text-xl">Made by: {article.author}</h2>
        <h2 className="text-center">Last Updated: {formattedDate}</h2>
        <p className="px-10">{article.body}</p>
      </div>
    </div>
  );
}

export default ArticleContainer;
