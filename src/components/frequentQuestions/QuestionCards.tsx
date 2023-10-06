import CardOne from './CardOne';
import CardTwo from './CardTwo';

function QuestionCards() {
  return (
    <div className="container-question-cards">
      <div className="first-question-cards">
        <CardOne
          title="O curso é ao vivo ou gravado?"
          answer="O curso é 100% gravado!"
        />
        <CardOne
          title="Quanto tempo terei acesso ao curso?"
          answer="Acesso ilimitado de 1 ano."
        />
      </div>
      <div className="second-question-cards">
        <CardTwo
          title="Como posso pedir reembolso?"
          answer="Você terá 7 dias para testar
        o curso. Durante esse período você poderá pedir reembolso
         no momento em que preferir e reembolsaremos
         seu dinheiro."
        />
        <CardTwo
          title="A plataforma de pagamentos é segura?"
          answer="Nós atualmente usamos a Hotmart, a maior
         plataforma de compra e venda de cursos do Brasil.
          Utilizamos a hotmart para garantir que seu dinheiro
          está seguro e você pode testar o produto sem problema algum."
        />
        <CardTwo
          title="Como vou receber acesso ao curso?"
          answer="Você vai receber um e-mail da Hotmart com acesso
         logo após a aprovação da compra. Verifique na sua caixa
          de e-mail, spam ou lixo eletrônico. E você também pode
          acessar o curso dentro da própria hotmart."
        />
      </div>
    </div>
  );
}

export default QuestionCards;
