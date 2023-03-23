import React from "react";

function ArticleCard({ id, author, title, body, created_at, updated_at }) {
  const date = new Date(created_at);
  const formattedDate = date.toLocaleString("en-US", { hour12: true });

  return (
    <div className="h-52 w-72 bg-slate-300 mb-5 mt-10 m-auto ">
      <h1 className="text-center">{title}</h1>
      <p className="lg:w-64 truncate ...">{body}</p>
      <div>
        <p>by: {author}</p>
        <p>created on: {formattedDate}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
