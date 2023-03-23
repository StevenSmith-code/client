import React from "react";
import { useNavigate } from "react-router-dom";

function ArticleCard({ id, author, title, body, created_at, updated_at }) {
  const date = new Date(created_at);
  const formattedDate = date.toLocaleDateString("en-US");
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/articles/${id}`)}
      className="h-72 w-96 bg-slate-300 mb-5 mt-10 m-auto px-10 py-10 rounded-xl cursor-pointer"
    >
      <h1 className="text-center mb-5 lg:text-2xl">{title}</h1>
      <p className="line-clamp-3 mb-8">{body}</p>
      <div className="text-sm flex justify-around">
        <p>by: {author}</p>
        <p>created: {formattedDate}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
