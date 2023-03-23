import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeContainer from "./HomeContainer";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </div>
  );
}

export default App;
