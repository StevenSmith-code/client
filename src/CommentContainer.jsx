import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

function CommentContainer() {
  const [comments, setComments] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/articles/${id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const renderComments = comments?.map((comment) => (
    <Comment
      key={comment.id}
      user={comment.user}
      comment={comment.comment}
      created_at={comment.created_at}
    />
  ));

  return (
    <div className="flex flex-col bg-gray-800 ">
      <div className="max-w-7xl w-[80rem] m-auto space-y-4 z-10 bg-gray-500 text-white h-[calc(100vh-96px)]">
        <h1 className="text-center lg:text-2xl font-bold mt-5">Comments:</h1>

        <div className="flex flex-col items-center space-y-10">
          {renderComments}
          <CreateComment id={id} />
        </div>
      </div>
    </div>
  );
}

export default CommentContainer;
