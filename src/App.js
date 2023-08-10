import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import CategoryBoardPage from "./Pages/CategoryBoardPage/CategoryBoardPage";
import QuizPage from "./Pages/QuizPage/QuizPage";
import GameOverPage from "./Pages/GameOverPage/GameOverPage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/temas" element={<CategoryBoardPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/gameover" element={<GameOverPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
