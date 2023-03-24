import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ArticleContainer() {
  let { id } = useParams();
  const [isHidden, setIsHidden] = useState(true);
  const [article, setArticle] = useState([]);
  const [updateArticle, setUpdateArticle] = useState("");
  const date = new Date(article.updated_at);
  const formattedDate = date.toLocaleString("en-US", { hour12: true });

  useEffect(() => {
    fetch(`http://localhost:9292/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, []);

  function handleUpdate() {
    if (isHidden) {
      setUpdateArticle(article.body);
      setIsHidden(!isHidden);
    }
    fetch(`http://localhost:9292/articles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: updateArticle,
      }),
    })
      .then((res) => res.json())
      .then((data) => setArticle(data));
    setIsHidden(!isHidden);
  }

  return (
    <div className="flex flex-col bg-gray-800 h-[calc(100vh-96px)]">
      <div className="max-w-7xl m-auto space-y-4 z-10 bg-gray-500 border border-black text-white h-[calc(100vh-96px)] overflow-y-scroll">
        <h1 className="text-center lg:text-4xl font-bold mt-10">
          {article.title}
        </h1>
        <h2 className="text-center lg:text-xl">Made by: {article.author}</h2>
        <div className="flex justify-center">
          <h2 className="text-center mr-5">Last Updated: {formattedDate}</h2>
          {isHidden && (
            <EditIcon onClick={handleUpdate} className="border border-black" />
          )}
        </div>
        {isHidden ? (
          <p className="px-10">{article.body}</p>
        ) : (
          <TextField
            id="outlined-multiline-static"
            sx={{ m: 1, width: "75ch" }}
            label="Write your blog here"
            multiline
            rows={35}
            value={updateArticle}
            onChange={(e) => setUpdateArticle(e.target.value)}
            placeholder="Write your blog here..."
          />
        )}
        {!isHidden && (
          <Button className="w-36" onClick={handleUpdate} variant="contained">
            Submit Changes
          </Button>
        )}
      </div>
    </div>
  );
}

export default ArticleContainer;
