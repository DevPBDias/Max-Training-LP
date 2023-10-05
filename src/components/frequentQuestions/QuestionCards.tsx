import Card from './Card';

function QuestionCards() {
  return (
    <div className="container-question-cards">
      <Card
        title="O curso é ao vivo ou gravado?"
        answer="O curso é 100% gravado!"
      />
      <Card
        title="Quanto tempo terei acesso ao curso?"
        answer="Acesso ilimitado de 1 ano."
      />
      <Card
        title="Como posso pedir reembolso?"
        answer="Você terá 7 dias para testar
        o curso. Durante esse período você poderá pedir reembolso
         no momento em que preferir e reembolsaremos
        seu dinheiro."
      />
      <Card
        title="A plataforma de pagamentos é segura?"
        answer="Nós atualmente usamos a Hotmart, a maior
         plataforma de compra e venda de cursos do Brasil.
          Utilizamos a hotmart para garantir que seu dinheiro
          está seguro e você pode testar o produto sem problema algum."
      />
      <Card
        title="Como vou receber acesso ao curso?"
        answer="Você vai receber um e-mail da Hotmart com acesso
         logo após a aprovação da compra. Verifique na sua caixa
          de e-mail, spam ou lixo eletrônico. E você também pode
          acessar o curso dentro da própria hotmart."
      />
    </div>
  );
}

export default QuestionCards;
