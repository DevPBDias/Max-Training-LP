import QuestionCards from './QuestionCards';
import './styles.css';
import questionsBg from '../../assets/questionsBg.png';

function FrequentQuestions() {
  return (
    <section className="question-section">
      <img src={ questionsBg } alt="" className="background-questions" />
      <section className="container-question">
        <h1 className="title-section">Perguntas frequentes</h1>
        <QuestionCards />
      </section>
    </section>
  );
}

export default FrequentQuestions;
