import './styles.css';
import aboutBgMobile from '../../assets/bg-mobile/Everton_Mobile.png';
import scratchs from '../../assets/bg-mobile/scratchs.png';
import logo from '../../assets/LogoMax.webp';
import aboutBgDesktop from '../../assets/bg-desktop/aboutBgDesktop.webp';

function About() {
  return (
    <section className="about-section">
      <div className="bg-mobile-about">
        <img src={ aboutBgMobile } alt="" className="bg-everton" />
      </div>
      <div className="sracth-about">
        <img src={ scratchs } alt="" className="bg-scracth" />
      </div>
      <div>
        <img src={ aboutBgDesktop } alt="" className="background-about" />
      </div>
      <div className="bg-logo-about">
        <img src={ logo } alt="" className="bg-logo" />
      </div>
      <section className="content-about-container">
        <h2 className="title-about">
          Fala, galerinha!
          <br />
          Treinador Evertinho na área!
        </h2>
        <p className="text-about">
          Aqui é Everton de Paula, conhecido como Treinador Evertinho.
          Sou ex-atleta profissional de futebol e formado em Educação
          Física pela Dom Bosco, com algumas pós-graduações.
          <br />
          <br />
          Atualmente, sou preparador físico de atletas de alto rendimento,
          com treinos focados em ganho de força, resistência, velocidade
          e agilidade, além de prevenção de lesões. Já trabalhei
          profissionalmente no São Joseense, equipe do Paraná,
          e com vários atletas do futebol profissional.
          <br />
          <br />
          Meu trabalho é personalizado e individualizado para o objetivo
          principal que o atleta escolher, sendo ele em moto remoto ou
          presencial, da forma como o atleta desejar.
        </p>
      </section>
    </section>
  );
}

export default About;
