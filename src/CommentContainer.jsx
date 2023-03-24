import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

function CommentContainer() {
  const [comments, setComments] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/articles/${id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div className="flex flex-col bg-gray-800 h-96 max-h-96">
      <div className="max-w-7xl w-[80rem] m-auto space-y-4 z-10 bg-gray-500 text-white h-[calc(100vh-96px)]">
        <h1 className="text-center lg:text-2xl font-bold mt-5">Comments:</h1>
        <Comment />
      </div>
    </div>
  );
}

export default CommentContainer;
