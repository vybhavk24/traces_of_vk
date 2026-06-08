import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import galaxies from "../data/galaxies";
import poems from "../data/poems/index";
import "./CosmicPoems.css";

// Deterministic position using golden angle spiral
function getGalaxyPosition(index, total) {
  const goldenAngle = 137.508;
  const angle = (index * goldenAngle * Math.PI) / 180;
  const radius = 22 + (index / Math.max(total - 1, 1)) * 30;
  const cx = 50 + radius * Math.cos(angle);
  const cy = 50 + radius * Math.sin(angle);
  return {
    left: `${Math.min(Math.max(cx, 10), 88)}%`,
    top: `${Math.min(Math.max(cy, 10), 88)}%`,
  };
}

function GalaxyCluster({ galaxy, poemCount, position, index }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  if (poemCount === 0) return null;

  return (
    <button
      className={`galaxy-cluster ${hovered ? "galaxy-cluster--hovered" : ""}`}
      style={{ ...position, animationDelay: `${index * 0.15}s` }}
      onClick={() => navigate(`/galaxy/${galaxy.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => {
        setTimeout(() => setHovered(false), 400);
        navigate(`/galaxy/${galaxy.id}`);
      }}
      aria-label={`Enter ${galaxy.label} — ${poemCount} poem${poemCount !== 1 ? "s" : ""}`}
    >
      {/* Cluster of mini dots suggesting many stars */}
      <span className="galaxy-cluster__nebula" aria-hidden="true">
        <span className="galaxy-cluster__dot galaxy-cluster__dot--1" />
        <span className="galaxy-cluster__dot galaxy-cluster__dot--2" />
        <span className="galaxy-cluster__dot galaxy-cluster__dot--3" />
        <span className="galaxy-cluster__dot galaxy-cluster__dot--core" />
      </span>

      <span className="galaxy-cluster__label">
        <span className="galaxy-cluster__name">{galaxy.label}</span>
        <span className="galaxy-cluster__count">
          {poemCount} poem{poemCount !== 1 ? "s" : ""}
        </span>
        {hovered && (
          <span className="galaxy-cluster__description">{galaxy.description}</span>
        )}
      </span>
    </button>
  );
}

export default function CosmicPoems() {
  const poemsByGalaxy = useMemo(() => {
    const map = {};
    poems.forEach((p) => {
      if (!map[p.galaxy]) map[p.galaxy] = 0;
      map[p.galaxy]++;
    });
    return map;
  }, []);

  const visibleGalaxies = galaxies.filter((g) => poemsByGalaxy[g.id] > 0);
  const total = visibleGalaxies.length;

  return (
    <section className="cosmic-poems" aria-label="Poetry galaxies">
      <div
        className="cosmic-poems__field"
        style={{ "--field-vh": `${Math.max(100, total * 16)}vh` }}
      >
        {visibleGalaxies.map((galaxy, i) => (
          <GalaxyCluster
            key={galaxy.id}
            galaxy={galaxy}
            poemCount={poemsByGalaxy[galaxy.id] || 0}
            position={getGalaxyPosition(i, total)}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
