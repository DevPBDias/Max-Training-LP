import Logo from '../utils/Logo';
import Bonus from './Bonus';
import BuyBtn from './BuyBtn';
import ContentText from './ContentText';
import './styles.css';

function Home() {
  return (
    <section className="container-home">
      <section className="contentContainer">
        <Logo />
        <ContentText />
        <BuyBtn />
        <Bonus />
      </section>
    </section>
  );
}

export default Home;
