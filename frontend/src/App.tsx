import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homePage/HomePage";
import UserPage from "./pages/userPage/UserPage";
import Matches from "./pages/matches/Matches";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/matches" element={<Matches />} />
      </Routes>
    </>
  );
}

export default App;
