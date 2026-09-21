import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homePage/HomePage";
import UserPage from "./pages/userPage/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userpage" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
