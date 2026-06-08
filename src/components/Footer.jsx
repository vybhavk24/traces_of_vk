import footerData from "../data/footer";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__lines">
          {footerData.lines.map((line, i) => (
            <p key={i} className="footer__line">{line}</p>
          ))}
        </div>

        <div className="footer__contact">
          {footerData.contact.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="footer__link"
              target={item.label !== "email" ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              {item.display}
            </a>
          ))}
        </div>

        <div className="footer__meta">
          <p className="footer__updated">last updated — {footerData.lastUpdated}</p>
          <p className="footer__credit">{footerData.credit}</p>
        </div>

        <p className="footer__closing">{footerData.closing}</p>

      </div>
    </footer>
  );
}
