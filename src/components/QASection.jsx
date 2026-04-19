import { useEffect, useRef, useState } from "react";
import questions from "../data/questions";
import "./QASection.css";

function QACard({ question, answer }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.35 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`qa-card ${visible ? "qa-card--visible" : ""}`}>
      <p className="qa-card__question">{question}</p>
      <p className="qa-card__answer">{answer}</p>
    </div>
  );
}

function ClosingLine({ text }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`qa-closing ${visible ? "qa-closing--visible" : ""}`}>
      <p className="qa-closing__text">{text}</p>
    </div>
  );
}

// Pull out last question's closing line if it exists
const lastQuestion = questions[questions.length - 1];
const closingLine = lastQuestion?.closing || null;

export default function QASection() {
  return (
    <section className="qa-section">
      {questions.map((item) => (
        <QACard key={item.id} question={item.question} answer={item.answer} />
      ))}

      {closingLine && <ClosingLine text={closingLine} />}

      <div className="qa-section__threshold">
        <span className="qa-section__threshold-line" />
        <div className="qa-section__threshold-center">
          <p className="qa-section__threshold-text">and now, the poems</p>
          <p className="qa-section__threshold-hint">each light is a poem — click to enter</p>
        </div>
        <span className="qa-section__threshold-line" />
      </div>
    </section>
  );
}
