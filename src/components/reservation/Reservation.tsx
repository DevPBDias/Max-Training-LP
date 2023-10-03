import BuyBtn from '../utils/BuyBtn';
import ContentText from './ContentText';
import ContainerCards from './ContainerCards';
import './styles.css';

function Reservation() {
  return (
    <section className="reservation-section">
      <section className="contentContainer">
        <ContentText />
        <h1
          className="title-cards"
        >
          Reserve agora e receba Bônus Especiais:
        </h1>
        <ContainerCards />
        <BuyBtn content="Quero comprar agora!" />
      </section>
    </section>

  );
}

export default Reservation;
