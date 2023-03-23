import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function ArticleForm() {
  const navigate = useNavigate();
  const [submittedData, setSubmittedData] = useState({
    author: "",
    title: "",
    body: "",
  });

  function handleForm(e) {
    e.preventDefault();
    console.log("clicked");
    fetch("http://localhost:9292/create_blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submittedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div className="bg-gray-800 h-screen">
      <div className="bg-gray-500 max-w-5xl m-auto rounded-lg -mt-2 flex flex-col items-center pb-10">
        <Box
          component="form"
          onSubmit={handleForm}
          className="text-center max-w-5xl mb-8"
          noValidate
          autoComplete="off"
        >
          <h1 className="text-center lg:text-3xl max-w-5xl mb-10 mt-10">
            Write a blog post!
          </h1>

          <div className="flex justify-between px-2 mb-10">
            <TextField
              id="outlined-basic"
              label="Author"
              variant="outlined"
              value={submittedData.author}
              onChange={(e) =>
                setSubmittedData({ ...submittedData, author: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={submittedData.title}
              onChange={(e) =>
                setSubmittedData({ ...submittedData, title: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col items-center">
            <TextField
              id="outlined-multiline-static"
              sx={{ m: 1, width: "75ch" }}
              label="Write your blog here"
              multiline
              rows={40}
              value={submittedData.body}
              onChange={(e) =>
                setSubmittedData({ ...submittedData, body: e.target.value })
              }
              placeholder="Write your blog here..."
            />
            <Button className="w-36" type="submit" variant="contained">
              Submit
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default ArticleForm;
