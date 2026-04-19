import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import poems from "../data/poems/index";
import StarCanvas from "../components/StarCanvas";
import "./PoemPage.css";

export default function PoemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const poem = poems.find((p) => p.id === id);

  // Scroll to top when poem loads — doesn't affect navigate(-1) back
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!poem) {
    return (
      <div className="poem-page poem-page--not-found">
        <StarCanvas />
        <div className="poem-page__content">
          <p className="poem-page__lost">this poem doesn't exist. or maybe it does, somewhere.</p>
          <button onClick={() => navigate(-1)} className="poem-page__back">← back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="poem-page">
      <StarCanvas />
      <div className="poem-page__content">

        <button onClick={() => navigate(-1)} className="poem-page__back">
          ← traces of vk
        </button>

        <article className="poem-page__article">
          <h1 className="poem-page__title">{poem.title}</h1>

          <pre className="poem-page__body">{poem.body}</pre>

          <div className="poem-page__meta">
            {poem.mood && (
              <p className="poem-page__meta-item">
                <span className="poem-page__meta-label">mood</span>
                {poem.mood}
              </p>
            )}
            {poem.themes?.length > 0 && (
              <p className="poem-page__meta-item">
                <span className="poem-page__meta-label">themes</span>
                {poem.themes.join(", ")}
              </p>
            )}
            {poem.origin && (
              <p className="poem-page__meta-item poem-page__meta-origin">
                <span className="poem-page__meta-label">origin</span>
                {poem.origin}
              </p>
            )}
            {poem.date && (
              <p className="poem-page__meta-item">
                <span className="poem-page__meta-label">written</span>
                {poem.date}
              </p>
            )}
          </div>
        </article>

      </div>
    </div>
  );
}
