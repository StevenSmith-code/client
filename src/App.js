import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleContainer from "./ArticleContainer";
import ArticleForm from "./ArticleForm";
import CommentContainer from "./CommentContainer";
import HomeContainer from "./HomeContainer";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route
          path="/articles/:id"
          element={
            <>
              <ArticleContainer /> <CommentContainer />
            </>
          }
        />
        <Route path="/create_blog" element={<ArticleForm />} />
      </Routes>
    </div>
  );
}

export default App;
