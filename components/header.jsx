export default function Header(){
  return (
    <header className="header container mt-4">
      <section className="header-secondary d-flex justify-content-between">
        <div className="header-connect">
          <ul>
            <li>
              <a href="tel:+1-877-666-1840" title="Call us"><i className="fa-solid fa-phone"></i>Toll Free 1-877-666-1840</a>
            </li>

            <li>
              <a href="mailto:office@traidaffairs.com" title="Emai us">office@traidaffairs.com</a>
            </li>
          </ul>
        </div>

        <div className="header-controls">
          <section className="section user-controls">
            <a href="" title="Account"></a>
            <img src="/images/user-avatar.png" alt="User" />
            <i className="fa-solid fa-angle-down"></i>
          </section>
          <section className="cart-controls">
            <a href="" title="Cart"><i className="fas fa-shopping-cart"></i>
            <span className="cart-qty">3</span></a>
          </section>
        </div>
      </section>

      <section className="header-primary">  </section>
     </header>
  )
}
