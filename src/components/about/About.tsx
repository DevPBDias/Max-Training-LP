import './styles.css';
import aboutBg from '../../assets/bg-mobile/aboutBg.webp';
import aboutBgDesktop from '../../assets/bg-desktop/aboutBgDesktop.webp';

function About() {
  return (
    <section className="about-section">
      <picture>
        <source srcSet={ aboutBgDesktop } media="(min-width: 1200px)" />
        <img src={ aboutBg } alt="" className="background-about" />
      </picture>
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
