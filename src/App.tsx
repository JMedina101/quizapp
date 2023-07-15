import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import ScoreDisplay from "./components/scores";
import Questions from "./components/questions";

function App() {
  return (
    <div className="canvas">
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/scores" element={<ScoreDisplay />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
