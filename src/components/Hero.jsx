import heroData from "../data/hero";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <p className="hero__site-name">{heroData.siteName}</p>
        <h1 className="hero__greeting">{heroData.greeting}</h1>
        <p className="hero__subtext">{heroData.subtext}</p>
        <span className="hero__scroll-prompt">{heroData.scrollPrompt}</span>
        <div className="hero__scroll-indicator" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
