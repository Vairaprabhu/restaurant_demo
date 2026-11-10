function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=2400&q=90"
        alt=""
        fetchPriority="high"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow eyebrow-light"><span /> AUTHENTIC SOUTH INDIAN CUISINE</p>
        <h1 id="hero-title">A Taste of Tradition,<br /><em>Crafted with Love.</em></h1>
        <p className="hero-description">
          The recipes we grew up with, the flavours we can never forget, and a place at the table just for you.
        </p>
        <div className="hero-actions">
          <a className="button button-gold" href="#menu">Explore our menu <span aria-hidden="true">↗</span></a>
          <a className="button button-quiet" href="#story">Discover our story <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <a className="scroll-indicator" href="#story" aria-label="Scroll to our story">
        <span>SCROLL TO DISCOVER</span><i aria-hidden="true" />
      </a>
      <span className="hero-coordinate">13°04&apos; N &nbsp; 80°17&apos; E</span>
    </section>
  );
}

export default HeroSection;
