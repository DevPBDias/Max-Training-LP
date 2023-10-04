import Logo from '../utils/Logo';
import Bonus from './Bonus';
import BuyBtn from '../utils/BuyBtn';
import ContentText from './ContentText';
import './styles.css';
import homeBg from '../../assets/homeBgMobile.png';

function Home() {
  return (
    <section className="home-section">
      <img src={ homeBg } alt="" className="backgroung-home" />
      <section className="content-home-container">
        <Logo />
        <ContentText />
        <BuyBtn content="Quero comprar agora!" />
        <Bonus />
      </section>
    </section>
  );
}

export default Home;
