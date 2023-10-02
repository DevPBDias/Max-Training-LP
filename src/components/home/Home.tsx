import Logo from '../utils/Logo';
import Bonus from './Bonus';
import BuyBtn from './BuyBtn';
import ContentText from './ContentText';
import BackgroundBlue from '../utils/BackgroundBlue';

function Home() {
  return (
    <section>
      <BackgroundBlue />
      <section>
        <Logo />
        <ContentText />
        <BuyBtn />
        <Bonus />
      </section>
    </section>
  );
}

export default Home;
