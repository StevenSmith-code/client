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
      key={article.id}
      id={article.id}
      author={article.author}
      title={article.title}
      body={article.body}
      created_at={article.created_at}
      updated_at={article.updated_at}
      setData={setData}
      data={data}
    />
  ));

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 bg-gray-800 h-[calc(100vh-96px)]">
      {render}
    </div>
  );
}
export default HomeContainer;
