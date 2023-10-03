import Card from './Card';

function ContainerCards() {
  return (
    <div className="card-container">
      <Card
        title="Versatilidade inigualável"
        content="Com uma variedade de mais de 300 exercícios,
         você nunca ficará entediado ou estagnado.
          Mude sua rotina sempre que desejar para manter
         o progresso e alcançar novos patamares."
      />
      <Card
        title="Treine onde e quando quiser"
        content="Adeus, desculpas! O Max Training Performance é flexível e se adapta
        à sua vida. Você pode realizar os exercícios na academia, em casa ou em
        qualquer lugar que preferir, a qualquer hora do dia."
      />
      <Card
        title="Prevenção de lesões"
        content="A segurança é nossa prioridade.
         Nosso programa inclui exercícios projetados para fortalecer
         músculos de suporte e melhorar a postura,
         reduzindo significativamente o risco de lesões durante os treinos."
      />
    </div>
  );
}

export default ContainerCards;
