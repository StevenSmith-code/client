import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function CreateComment({ id, setComments, comments }) {
  const [comment, setComment] = useState({
    user: "",
    comment: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/articles/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        setComments([...comments, data]);
        setComment({
          user: "",
          comment: "",
        });
      });
  }

  return (
    <Box
      className="border border-black px-3 rounded-lg mb-5"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "25ch",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <h1 className="lg:text-xl">Post a Comment:</h1>
      <TextField
        id="outlined-basic"
        value={comment.user}
        onChange={(e) => setComment({ ...comment, user: e.target.value })}
        label="Name"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        value={comment.comment}
        onChange={(e) => setComment({ ...comment, comment: e.target.value })}
        label="Comment"
        variant="outlined"
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}

export default CreateComment;
