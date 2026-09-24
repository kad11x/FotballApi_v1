import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homePage/HomePage";
import UserPage from "./pages/userPage/UserPage";
import Matches from "./pages/matches/Matches";
import FixtureContainer from "./components/FixtureContainer/FixtureContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/matches" element={<FixtureContainer />} />
        <Route path="/matches/:id" element={<Matches />} />
      </Routes>
    </>
  );
}

export default App;
