const dishes = [
  {
    number: "01",
    name: "Ghee Roast Dosa",
    description: "Paper-thin, golden and crisp, with coconut chutney and slow-simmered sambar.",
    price: "₹240",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1100&q=85",
    alt: "Golden South Indian dosa served with chutney",
    className: "dish-wide",
  },
  {
    number: "02",
    name: "Sunday Veg Meals",
    description: "A generous banana-leaf-inspired spread of seasonal sides, rice and comfort.",
    price: "₹380",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85",
    alt: "Colourful Indian vegetarian meal with rice and curries",
    className: "",
  },
  {
    number: "03",
    name: "House Dum Biryani",
    description: "Fragrant basmati, warming spices and herbs, layered and cooked low and slow.",
    price: "₹420",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85",
    fallbackImage: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=1000&q=85",
    alt: "A bowl of fragrant biryani topped with fresh herbs",
    className: "",
  },
  {
    number: "04",
    name: "Pepper Paneer",
    description: "Soft paneer tossed with cracked pepper, curry leaves and a little fire.",
    price: "₹360",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1100&q=85",
    alt: "Paneer curry in a rich, spiced sauce",
    className: "dish-wide",
  },
];

function SignatureMenu() {
  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-title">
      <div className="section-shell menu-shell">
        <div className="menu-heading">
          <div>
            <p className="eyebrow"><span /> FROM THE HEART OF OUR KITCHEN</p>
            <h2 id="menu-title">A few things<br />we make with <em>love.</em></h2>
          </div>
          <p>Made fresh, with ingredients worth knowing and recipes worth keeping. Here are a few house favourites.</p>
        </div>
        <div className="menu-grid">
          {dishes.map((dish) => (
            <article className={`dish ${dish.className}`} key={dish.name}>
              <div className="dish-image">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  loading="lazy"
                  onError={(event) => {
                    if (dish.fallbackImage && event.currentTarget.src !== dish.fallbackImage) {
                      event.currentTarget.src = dish.fallbackImage;
                    }
                  }}
                />
                <span className="dish-number">{dish.number}</span>
              </div>
              <div className="dish-info">
                <div>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>
                <span className="dish-price">{dish.price}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="menu-disclaimer">A sample menu for this fictional restaurant demo. Prices are illustrative.</p>
      </div>
    </section>
  );
}

export default SignatureMenu;
