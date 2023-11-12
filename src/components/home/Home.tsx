import Logo from '../utils/Logo';
import Bonus from './Bonus';
import BuyBtn from '../utils/BuyBtn';
import ContentText from './ContentText';
import backgroundImg from '../../assets/bg-desktop/homeBg.webp';
import bgHomeMobile from '../../assets/bg-mobile/homeBgMobile.webp';

import './styles.css';

function Home() {
  return (
    <section className="home-section">
      <div className="container-bg-home">
        <picture>
          <source
            className="bg-home-mobile"
            srcSet={ bgHomeMobile }
            media="(max-width: 592px)"
          />
          <img className="bg-home" src={ backgroundImg } alt="BgHome" />
        </picture>
      </div>
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
