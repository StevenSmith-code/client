import { Button } from "@mui/material";
import React from "react";

function Comment({ user, comment, created_at }) {
  //   if (!comments || comments.length === 0) {
  //     return (
  //       <Button loading variant="plain">
  //         Plain
  //       </Button>
  //     );
  //   }
  const date = new Date(created_at);
  const formattedDate = date.toLocaleString("en-US", { hour12: true });

  return (
    <div className="w-96 border px-5 py-3 overflow-y-scroll rounded-lg border-black m-auto">
      <h2>{user}: </h2>
      <div className="flex flex-col justify-between">
        <p>{comment}</p>
        <p>Created on: {formattedDate}</p>
      </div>
    </div>
  );
}

export default Comment;
