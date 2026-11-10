function StorySection() {
  return (
    <section className="story section-shell" id="story" aria-labelledby="story-title">
      <div className="story-visual">
        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
          alt="A table of richly spiced dishes made for sharing"
          loading="lazy"
        />
        <span className="story-image-note">A little more of what matters.</span>
        <span className="story-index" aria-hidden="true">01 / 06</span>
      </div>
      <div className="story-copy">
        <p className="eyebrow"><span /> A PLACE AT OUR TABLE</p>
        <h2 id="story-title">More Than<br />Just a <em>Meal</em></h2>
        <p className="story-lead">Some flavours take you home. We built a place around that feeling.</p>
        <p>
          Spice Garden began with the kind of cooking that never needed a recipe card: a pinch from memory,
          a little extra time, and always enough to share. Today, those familiar South Indian flavours meet
          seasonal ingredients and the warmth of a neighbourhood table.
        </p>
        <p className="story-signature">Come hungry. Leave a little more at home.</p>
        <a className="text-link" href="#experience">Take a look around <span aria-hidden="true">↗</span></a>
        <span className="story-flourish" aria-hidden="true">S</span>
      </div>
    </section>
  );
}

export default StorySection;
