const galleryImages = [
  {
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1100&q=85",
    alt: "A richly spiced curry, freshly prepared",
    className: "gallery-tall",
  },
  {
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=85",
    alt: "A comforting Indian meal served with rice",
    className: "gallery-short",
  },
  {
    image: "https://images.unsplash.com/photo-1579888944880-d98341245702?auto=format&fit=crop&w=900&q=85",
    alt: "A beautifully plated meal finished with fresh herbs",
    className: "gallery-short",
  },
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85",
    alt: "Warm, welcoming restaurant interior",
    className: "gallery-tall",
  },
  {
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    alt: "A colourful spread of freshly prepared food",
    className: "gallery-short",
  },
  {
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
    alt: "A traditional vegetarian meal set out to share",
    className: "gallery-short",
  },
];

function FoodGallery() {
  return (
    <section className="gallery-section section-shell" id="gallery" aria-labelledby="gallery-title">
      <div className="gallery-heading">
        <div>
          <p className="eyebrow"><span /> THE TABLE, THROUGH OUR EYES</p>
          <h2 id="gallery-title">A little taste of <em>here.</em></h2>
        </div>
        <span className="gallery-count">A FEW FAVOURITE THINGS &nbsp;·&nbsp; 01—06</span>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <figure className={`gallery-image ${item.className}`} key={item.alt}>
            <img src={item.image} alt={item.alt} loading="lazy" />
            <figcaption>SPICE GARDEN &nbsp;·&nbsp; {String(index + 1).padStart(2, "0")}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default FoodGallery;
