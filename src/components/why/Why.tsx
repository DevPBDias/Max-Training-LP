import BuyBtn from '../utils/BuyBtn';
import ContainerCards from './ContainerCards';
import ContentText from './ContentText';
import './styles.css';

function Why() {
  return (
    <section className="why-section">
      <section className="contentContainer">
        <ContentText />
        <ContainerCards />
        <BuyBtn content="Começar agora!" />
      </section>
    </section>
  );
}

export default Why;
