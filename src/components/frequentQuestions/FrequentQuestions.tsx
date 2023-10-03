import QuestionCards from './QuestionCards';
import './styles.css';

function FrequentQuestions() {
  return (
    <section className="question-section">
      <section className="container-question">
        <h1 className="title-section">Perguntas frequentes</h1>
        <QuestionCards />
      </section>
    </section>
  );
}

export default FrequentQuestions;
