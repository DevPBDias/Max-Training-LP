import Logo from '../utils/Logo';
import ContentText from './ContentText';
import VideoContainer from './VideoContainer';
import './styles.css';
import depoimentBg from '../../assets/depoimentBg.png';

function Depoiments() {
  return (
    <section className="depoiment-section">
      <img src={ depoimentBg } alt="" className="background-depoiment" />
      <section className="depoiment-container">
        <Logo />
        <ContentText />
        <VideoContainer />
      </section>
    </section>
  );
}

export default Depoiments;
