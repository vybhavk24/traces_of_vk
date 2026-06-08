import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import galaxies from "../data/galaxies";
import poems from "../data/poems/index";
import StarCanvas from "../components/StarCanvas";
import "./GalaxyPage.css";

function groupPoems(poems) {
  const sequences = {};
  const standalones = [];

  poems.forEach((poem) => {
    if (poem.sequence) {
      const key = poem.sequence.name;
      if (!sequences[key]) sequences[key] = [];
      sequences[key].push(poem);
    } else {
      standalones.push(poem);
    }
  });

  Object.values(sequences).forEach((seq) =>
    seq.sort((a, b) => a.sequence.order - b.sequence.order)
  );

  return { sequences, standalones };
}

export default function GalaxyPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const galaxy = galaxies.find((g) => g.id === id);
  const galaxyPoems = useMemo(
    () => poems.filter((p) => p.galaxy === id),
    [id]
  );

  if (!galaxy || galaxyPoems.length === 0) {
    return (
      <div className="galaxy-page galaxy-page--empty">
        <StarCanvas />
        <div className="galaxy-page__content">
          <p className="galaxy-page__lost">this galaxy doesn't exist yet.</p>
          <button onClick={() => navigate(-1)} className="galaxy-page__back">← back</button>
        </div>
      </div>
    );
  }

  const { sequences, standalones } = groupPoems(galaxyPoems);
  const sequenceEntries = Object.entries(sequences);

  return (
    <div className="galaxy-page">
      <StarCanvas />
      <div className="galaxy-page__content">

        <button onClick={() => navigate(-1)} className="galaxy-page__back">
          ← traces of vk
        </button>

        <header className="galaxy-page__header">
          <h1 className="galaxy-page__title">{galaxy.label}</h1>
          <p className="galaxy-page__description">{galaxy.description}</p>
          <p className="galaxy-page__count">
            {galaxyPoems.length} poem{galaxyPoems.length !== 1 ? "s" : ""}
          </p>
        </header>

        <div className="galaxy-page__list">

          {sequenceEntries.map(([name, seqPoems]) => (
            <div key={name} className="galaxy-sequence">
              <p className="galaxy-sequence__name">{name}</p>
              <div className="galaxy-sequence__poems">
                {seqPoems.map((poem, i) => (
                  <button
                    key={poem.id}
                    className="galaxy-poem-row galaxy-poem-row--sequence"
                    onClick={() => navigate(`/poem/${poem.id}`)}
                  >
                    <span className="galaxy-poem-row__order">{i + 1}</span>
                    <span className="galaxy-poem-row__title">{poem.title}</span>
                    {poem.mood && (
                      <span className="galaxy-poem-row__mood">{poem.mood}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {standalones.map((poem) => (
            <button
              key={poem.id}
              className="galaxy-poem-row"
              onClick={() => navigate(`/poem/${poem.id}`)}
            >
              <span className="galaxy-poem-row__dot" aria-hidden="true" />
              <span className="galaxy-poem-row__title">{poem.title}</span>
              {poem.mood && (
                <span className="galaxy-poem-row__mood">{poem.mood}</span>
              )}
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}
