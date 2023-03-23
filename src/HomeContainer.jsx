import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

function HomeContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const render = data.map((article) => (
    <ArticleCard
      id={article.id}
      author={article.author}
      title={article.title}
      body={article.body}
      created_at={article.created_at}
      updated_at={article.updated_at}
    />
  ));

  return <div className="grid grid-cols-3">{render}</div>;
}
export default HomeContainer;
