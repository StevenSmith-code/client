import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { width } from "@mui/system";

function CreateComment() {
  return (
    <Box
      className="border border-black px-3 rounded-lg mb-5"
      component="form"
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
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Comment" variant="outlined" />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}

export default CreateComment;
