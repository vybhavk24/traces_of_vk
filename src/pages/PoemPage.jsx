import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import poems from "../data/poems/index";
import StarCanvas from "../components/StarCanvas";
import "./PoemPage.css";

export default function PoemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const poem = poems.find((p) => p.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  // Find prev/next if part of a sequence
  const { prev, next } = useMemo(() => {
    if (!poem?.sequence) return { prev: null, next: null };
    const series = poems
      .filter((p) => p.sequence?.name === poem.sequence.name)
      .sort((a, b) => a.sequence.order - b.sequence.order);
    const idx = series.findIndex((p) => p.id === poem.id);
    return {
      prev: idx > 0 ? series[idx - 1] : null,
      next: idx < series.length - 1 ? series[idx + 1] : null,
    };
  }, [poem]);

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

        {poem.sequence && (
          <p className="poem-page__series">{poem.sequence.name} · {poem.sequence.order}</p>
        )}

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

        {/* Sequence navigation */}
        {(prev || next) && (
          <nav className="poem-page__sequence-nav">
            {prev ? (
              <button
                className="poem-page__seq-btn poem-page__seq-btn--prev"
                onClick={() => navigate(`/poem/${prev.id}`)}
              >
                <span className="poem-page__seq-arrow">←</span>
                <span className="poem-page__seq-title">{prev.title}</span>
              </button>
            ) : <span />}
            {next && (
              <button
                className="poem-page__seq-btn poem-page__seq-btn--next"
                onClick={() => navigate(`/poem/${next.id}`)}
              >
                <span className="poem-page__seq-title">{next.title}</span>
                <span className="poem-page__seq-arrow">→</span>
              </button>
            )}
          </nav>
        )}

      </div>
    </div>
  );
}
