import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PoemPage from "./pages/PoemPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/poem/:id" element={<PoemPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
