import Logo from '../utils/Logo';
import ContentText from './ContentText';
import VideoContainer from './VideoContainer';
import './styles.css';
import depoimentBg from '../../assets/bg-mobile/depoimentBg.webp';
import depoimentBgDesktop from '../../assets/bg-desktop/depoimentBgDesktop.webp';

function Depoiments() {
  return (
    <section className="depoiment-section">
      <picture>
        <source srcSet={ depoimentBgDesktop } media="(min-width: 1200px)" />
        <img src={ depoimentBg } alt="" className="background-about" />
      </picture>
      <section className="depoiment-container">
        <Logo />
        <ContentText />
        <VideoContainer />
      </section>
    </section>
  );
}

export default Depoiments;
