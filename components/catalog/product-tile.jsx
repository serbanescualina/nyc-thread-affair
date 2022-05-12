export default function ProductTile() {
  return <article className="product-tile">
    <header className="product-tile-header">
      <div className="product-tile-image">
        <a href="" title="Thread Affair">
          <img src="/images/products/product-01a.jpg" alt="Thread Affair" ></img>
        </a>
      </div>

      <div className="product-tile-badge">
        <span className="badge badge-font-large">%</span>
      </div>

      <div className="product-tile-headings">
        <h1>
          <a href="" tittle="Thread Affair">
            <span>Thread Affair</span>
            <span>Gingham</span>
            Suit
          </a>
        </h1>

        <h2>
          <a href="" tittle="Thread Affair">
            Berlin fit-Regular
          </a>
        </h2>
      </div>
    </header>

    <section className="product-tile-info">
      <span className="produc-tile-pricing">
        <span className="product-price-regular">399</span>
        <span className="product-price">
          USD
          <span>299</span>
        </span>
      </span>
    </section>
    <footer className="product-tile-controls">
      <button className="button product-tile-a2c" title="Add to cart" type="button">Add to cart</button>
    </footer>
  </article>
}
