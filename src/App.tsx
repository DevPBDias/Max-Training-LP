import About from './components/about/About';
import Contact from './components/contact/Contact';
import Depoiments from './components/depoiments/Depoiments';
import Footer from './components/footer/Footer';
import FrequentQuestions from './components/frequentQuestions/FrequentQuestions';
import Home from './components/home/Home';
import Pricing from './components/pricing/Pricing';
import Reservation from './components/reservation/Reservation';
import Why from './components/why/Why';

export default function App() {
  return (
    <main>
      <Home />
      <Why />
      <Depoiments />
      <Reservation />
      <Pricing />
      <FrequentQuestions />
      <Contact />
      <About />
      <Footer />
    </main>
  );
}
