import './styles.css';
import logoMin from '../../assets/LogoMin.webp';

function Footer() {
  return (
    <footer className="footer-section">
      <section className="content-container-footer">
        <img src={ logoMin } alt="logo-Max-Training" className="logo-footer" />
        <p className="text-footer">
          Olé Mídia
          <br />
          Todos os direitos reservados.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
