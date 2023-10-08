import Logo from '../utils/Logo';
import Bonus from './Bonus';
import BuyBtn from '../utils/BuyBtn';
import ContentText from './ContentText';
import homeBg from '../../assets/bg-desktop/homeBg.webp';
import homeBgMobile from '../../assets/bg-mobile/homeBgMobile.webp';
import './styles.css';

function Home() {
  return (
    <section className="home-section">
      <picture className="background-container">
        <source
          srcSet={ homeBg }
          media="(min-width: 1200px)"
        />
        <img src={ homeBgMobile } alt="" className="background-home" />
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
