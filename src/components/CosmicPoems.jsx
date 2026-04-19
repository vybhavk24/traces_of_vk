import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import poems from "../data/poems/index";
import "./CosmicPoems.css";

// Minimum vh per poem — ensures stars never crowd
const MIN_VH_PER_POEM = 18;
const MIN_FIELD_VH = 100;

function getStarPosition(id, index, total) {
  const seed = parseInt(id, 10) || index + 1;
  const goldenAngle = 137.508;
  const angle = (seed * goldenAngle * Math.PI) / 180;

  // Radius grows with more poems so they spread out
  const minRadius = 20;
  const maxRadius = 44;
  const radius = minRadius + ((index / Math.max(total - 1, 1)) * (maxRadius - minRadius));

  const cx = 50 + radius * Math.cos(angle);
  const cy = 50 + radius * Math.sin(angle);

  return {
    left: `${Math.min(Math.max(cx, 10), 88)}%`,
    top: `${Math.min(Math.max(cy, 8), 90)}%`,
  };
}

function PoemStar({ poem, position, index }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={`poem-star ${hovered ? "poem-star--hovered" : ""}`}
      style={{
        ...position,
        animationDelay: `${index * 0.12}s`,
      }}
      onClick={() => navigate(`/poem/${poem.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Touch support
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => {
        setTimeout(() => setHovered(false), 600);
        navigate(`/poem/${poem.id}`);
      }}
      aria-label={`Read poem: ${poem.title}`}
    >
      <span className="poem-star__dot" aria-hidden="true" />
      <span className="poem-star__label">
        <span className="poem-star__title">{poem.title}</span>
        {poem.mood && (
          <span className="poem-star__mood">{poem.mood}</span>
        )}
      </span>
    </button>
  );
}

export default function CosmicPoems() {
  const total = poems.length;

  // Field height grows with poem count — min 100vh, adds 18vh per poem beyond 6
  const fieldVh = Math.max(
    MIN_FIELD_VH,
    total > 6 ? MIN_FIELD_VH + (total - 6) * MIN_VH_PER_POEM : MIN_FIELD_VH
  );

  const stars = useMemo(() =>
    poems.map((poem, i) => ({
      poem,
      position: getStarPosition(poem.id, i, total),
    })),
    [total]
  );

  return (
    <section
      className="cosmic-poems"
      aria-label="Poems"
      style={{ "--field-vh": `${fieldVh}vh` }}
    >
      <div className="cosmic-poems__field">
        {stars.map(({ poem, position }, i) => (
          <PoemStar
            key={poem.id}
            poem={poem}
            position={position}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
