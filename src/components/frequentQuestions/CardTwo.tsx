type IQuestionProps = {
  title: string,
  answer: string,
};

function CardTwo({ title, answer }: IQuestionProps) {
  return (
    <div className="question-card-two">
      <h3 className="title-question-card">{title}</h3>
      <p className="answer-card">{answer}</p>
    </div>
  );
}

export default CardTwo;
