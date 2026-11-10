const footerLinks = [
  ["Our story", "story"],
  ["The menu", "menu"],
  ["The space", "experience"],
  ["Gallery", "gallery"],
  ["Contact", "contact"],
];

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-shell">
        <a className="wordmark footer-wordmark" href="#home" aria-label="Spice Garden home">
          <span className="wordmark-flower" aria-hidden="true">✳</span>
          <span><strong>Spice Garden</strong><small>CHENNAI · SINCE ALWAYS</small></span>
        </a>
        <p className="footer-note">A table full of stories.</p>
        <nav className="footer-navigation" aria-label="Footer navigation">
          {footerLinks.map(([label, target]) => <a href={`#${target}`} key={target}>{label}</a>)}
        </nav>
        <div className="footer-social">
          <a href="#gallery" aria-label="Instagram placeholder">IG</a>
          <a href="#gallery" aria-label="Facebook placeholder">FB</a>
        </div>
      </div>
      <div className="footer-bottom section-shell">
        <span>© 2026 Spice Garden &nbsp;·&nbsp; Fictional restaurant concept</span>
        <a href="#home">Back to the beginning ↑</a>
        <span className="footer-credit">Website Demo Designed by <strong>TechoraDev</strong></span>
      </div>
    </footer>
  );
}

export default SiteFooter;
