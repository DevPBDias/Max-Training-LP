type IQuestionProps = {
  title: string,
  answer: string,
};

function Card({ title, answer }: IQuestionProps) {
  return (
    <div className="question-card">
      <h3 className="title-question-card">{title}</h3>
      <p className="answer-card">{answer}</p>
    </div>
  );
}

export default Card;
