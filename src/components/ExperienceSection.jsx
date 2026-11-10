function ExperienceSection() {
  return (
    <section className="experience" id="experience" aria-labelledby="experience-title">
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=90"
        alt="A warmly lit restaurant dining room set for dinner"
        loading="lazy"
      />
      <div className="experience-overlay" />
      <div className="experience-copy">
        <p className="eyebrow eyebrow-light"><span /> STAY A LITTLE LONGER</p>
        <h2 id="experience-title">Where Every Meal<br />Becomes a <em>Memory</em></h2>
        <p>Soft light, one more story, and the kind of meal that turns an ordinary evening into your favourite one.</p>
        <a className="text-link text-link-light" href="#contact">Find us in Chennai <span aria-hidden="true">↗</span></a>
      </div>
      <span className="experience-caption">GOOD FOOD, GOOD COMPANY, ALWAYS.</span>
    </section>
  );
}

export default ExperienceSection;
