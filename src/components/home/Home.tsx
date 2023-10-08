import Logo from '../utils/Logo';
import Bonus from './Bonus';
import BuyBtn from '../utils/BuyBtn';
import ContentText from './ContentText';
import './styles.css';
import homeBgMobile from '../../assets/bg-mobile/homeBgMobile.webp';
import homeBg from '../../assets/bg-desktop/homeBg.webp';

function Home() {
  return (
    <section className="home-section">
      <picture>
        <source srcSet={ homeBg } media="(min-width: 1200px)" />
        <img src={ homeBgMobile } alt="" className="background-about" />
      </picture>
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
