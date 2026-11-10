function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner section-shell">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-light"><span /> WE’LL KEEP A PLACE FOR YOU</p>
          <h2 id="contact-title">Come as you are.<br /><em>Stay for supper.</em></h2>
          <p>Find our little corner of Chennai. The kettle’s on and there’s always room at the table.</p>
          <a className="button button-gold" href="#contact">WhatsApp us <span aria-hidden="true">↗</span></a>
          <small className="demo-label">Visual demo CTA · no messaging or booking functionality</small>
        </div>
        <div className="contact-details">
          <div className="contact-detail">
            <span className="contact-index">01</span>
            <div><h3>Come find us</h3><p>42 Market Street, Mylapore<br />Chennai, Tamil Nadu 600004</p><small>FICTIONAL DEMO ADDRESS</small></div>
          </div>
          <div className="contact-detail">
            <span className="contact-index">02</span>
            <div><h3>When we’re here</h3><p>Every day &nbsp;·&nbsp; 11:30 am – 10:00 pm</p><small>SAMPLE OPENING HOURS</small></div>
          </div>
          <div className="contact-detail">
            <span className="contact-index">03</span>
            <div><h3>Give us a ring</h3><p>+91 00000 00000</p><small>DEMO NUMBER · NOT A REAL CONTACT</small></div>
          </div>
        </div>
      </div>
      <span className="contact-watermark" aria-hidden="true">S</span>
    </section>
  );
}

export default ContactSection;
