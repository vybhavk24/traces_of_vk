import StarCanvas from "../components/StarCanvas";
import Hero from "../components/Hero";
import QASection from "../components/QASection";
import CosmicPoems from "../components/CosmicPoems";
import Footer from "../components/Footer";
import "../App.css";

export default function HomePage() {
  return (
    <div className="app">
      <StarCanvas />
      <div className="app__content">
        <Hero />
        <QASection />
        <CosmicPoems />
        <Footer />
      </div>
    </div>
  );
}
