import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalaxyPage from "./pages/GalaxyPage";
import PoemPage from "./pages/PoemPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/galaxy/:id" element={<GalaxyPage />} />
      <Route path="/poem/:id" element={<PoemPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
