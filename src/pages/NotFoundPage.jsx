import { Link } from "react-router-dom";
import StarCanvas from "../components/StarCanvas";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="notfound">
      <StarCanvas />
      <div className="notfound__content">
        <p className="notfound__text">you've wandered somewhere that doesn't exist.</p>
        <p className="notfound__text notfound__text--small">even the stars don't know this place.</p>
        <Link to="/" className="notfound__back">← take me back</Link>
      </div>
    </div>
  );
}
