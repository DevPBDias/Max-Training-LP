import Logo from '../utils/Logo';
import ContentText from './ContentText';
import VideoContainer from './VideoContainer';
import './styles.css';

function Depoiments() {
  return (
    <section className="depoiment-section">
      <section className="depoiment-container">
        <Logo />
        <ContentText />
        <VideoContainer />
      </section>
    </section>
  );
}

export default Depoiments;
