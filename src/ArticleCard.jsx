import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function ArticleCard({
  id,
  author,
  title,
  body,
  created_at,
  updated_at,
  setData,
  data,
}) {
  const date = new Date(created_at);
  const formattedDate = date.toLocaleDateString("en-US");
  const navigate = useNavigate();

  function handleDelete(e) {
    e.stopPropagation();
    fetch(`http://localhost:9292/articles/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data2) => {
        setData(data.filter((article) => article.id != id));
      });
  }

  return (
    <div
      onClick={() => navigate(`/articles/${id}`)}
      className="h-72 w-96 bg-slate-300 mb-5 mt-10 m-auto px-10 py-10 rounded-xl cursor-pointer hover:scale-110 transition duration-100 ease-in-out"
    >
      <h1 className="text-center mb-5 lg:text-2xl">{title}</h1>
      <p className="line-clamp-3 mb-8">{body}</p>
      <div className="text-sm flex justify-around">
        <p>by: {author}</p>
        <p>created: {formattedDate}</p>
        <DeleteForeverIcon
          onClick={handleDelete}
          className="border border-black hover:bg-red-500 "
        />
      </div>
    </div>
  );
}

export default ArticleCard;
