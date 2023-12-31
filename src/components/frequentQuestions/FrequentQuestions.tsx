import QuestionCards from './QuestionCards';
import './styles.css';
import questionsBg from '../../assets/bg-mobile/questionsBg.webp';
import questionsBgDesktop from '../../assets/bg-desktop/questionsBgDesktop.webp';

function FrequentQuestions() {
  return (
    <section className="question-section">
      <section className="container-question">
        <h1 className="title-section">Perguntas frequentes</h1>
        <QuestionCards />
      </section>
      <picture>
        <source
          srcSet={ questionsBgDesktop }
          media="(min-width: 1200px)"
        />
        <img src={ questionsBg } alt="" className="background-questions" />
      </picture>
    </section>
  );
}

export default FrequentQuestions;
