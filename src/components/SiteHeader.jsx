import { useEffect, useState } from "react";

const navigation = [
  ["Our story", "story"],
  ["The menu", "menu"],
  ["The space", "experience"],
  ["Gallery", "gallery"],
];

function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 48);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}${menuOpen ? " menu-is-open" : ""}`}>
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Spice Garden home">
        <span className="wordmark-flower" aria-hidden="true">✳</span>
        <span>
          <strong>Spice Garden</strong>
          <small>CHENNAI · SINCE ALWAYS</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav className={`site-navigation${menuOpen ? " is-open" : ""}`} id="site-navigation" aria-label="Main navigation">
        {navigation.map(([label, target]) => (
          <a key={target} href={`#${target}`} onClick={closeMenu}>{label}</a>
        ))}
        <a className="header-cta" href="#contact" onClick={closeMenu}>
          Come say hello <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

export default SiteHeader;
