import BtnContact from './BtnContact';
import instagramIcon from '../../assets/icons/instagram.png';
import whatsappIcon from '../../assets/icons/zap.png';
import './styles.css';

function Contact() {
  return (
    <section className="contact-section">
      <section className="content-container">
        <h1 className="title-contact">
          Ainda em dúvida?
          <br />
          Entre em contato
        </h1>
        <BtnContact
          link="https://www.instagram.com/olemidia/"
          text="instagram"
          icon={ instagramIcon }
        />
        <BtnContact
          link="https://www.instagram.com/olemidia/"
          text="whatsapp"
          icon={ whatsappIcon }
        />
      </section>
    </section>
  );
}

export default Contact;
