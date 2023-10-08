import BuyBtn from '../utils/BuyBtn';
import './styles.css';

function Pricing() {
  return (
    <section className="pricing-section">
      <section className="container-pricing">
        <h2
          className="title-price"
        >
          Não deixe essa oportunidade passar!
          Transforme-se em sua melhor versão agora mesmo!
        </h2>
        <p className="total-price">
          de
          {' '}
          <span>299,00</span>
        </p>
        <p className="text-price">
          por apenas
        </p>
        <p className="offer-price">12x de 19,66*</p>
        <p className="text-price">
          ou R$ 197,00 à vista
        </p>
        <BuyBtn content="Começar agora!" />
      </section>
    </section>
  );
}

export default Pricing;
