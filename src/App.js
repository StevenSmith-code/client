import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleContainer from "./ArticleContainer";
import HomeContainer from "./HomeContainer";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/articles/:id" element={<ArticleContainer />} />
      </Routes>
    </div>
  );
}

export default App;
