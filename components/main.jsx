import HomeNewsletter from "./homepage/home-newsletter";

export default function Main(){
  return (
  <main>
    <header className="content-header">
      <div className="banner-main">
       <div className="banner-main-inner container">
       <div className="banner-info">
          <h1>Office suits</h1>
          <h2>Get back to work in style</h2>
          <a href="" title="Create your suit" className="button button-large">
            Create your suit
          </a>
        </div>

        <div className="banner-copy">
          <p>
            <span>A Tailored Suit </span>
            that will fit you perfectly is a dream for everybody.</p>
          <p className="d-none d-lg-block">
            We provide you with the design and you choose if you like it or if you want to change the details with our online configurator.
          </p>
        </div>
       </div>
      </div>
    </header>
    <section className="content-main">
      <section className="home-catalog-preview container">
        <header>
          <h1 className="section-title">
            <span>Glamor</span> Suits
          </h1>

          <p>
          Accomplish new achievements with a bold new style from the brilliant collection of men’s designer suits.</p>
           <p> For the finest custom tailored experience, be sure to explore our selection of premium fabrics from one of the world’s oldest fabric mills, Vitale Barberis Canonico.
          </p>
        </header>

        <section className="product-tiles">
          {/* insert-product-tiles */}
        </section>

        <footer>
          <a href="" title="See more" className="catalog-preview-cta">
            see more
          </a>
        </footer>
      </section>

      <HomeNewsletter></HomeNewsletter>

      <section className="home-payment container">
        <header>
          <h1 className="section-title"><span>How to</span> Play</h1>
        </header>

        <ul>
          <li>
            <img src="/images/payment/amazon.jpg" alt="" ></img>
          </li>

          <li>
            <img src="/images/payment/amazon.jpg" alt="" ></img>
          </li>

          <li>
            <img src="/images/payment/amazon.jpg" alt="" ></img>
          </li>

          <li>
            <img src="/images/payment/amazon.jpg" alt="" ></img>
          </li>

          <li>
            <img src="/images/payment/amazon.jpg" alt="" ></img>
          </li>

          <li>
            <img src="/images/payment/amazon.jpg" alt="" ></img>
          </li>
        </ul>
      </section>
    </section>
     </main>
  );
}
