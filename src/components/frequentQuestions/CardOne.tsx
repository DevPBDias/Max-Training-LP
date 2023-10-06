type IQuestionProps = {
  title: string,
  answer: string,
};

function CardOne({ title, answer }: IQuestionProps) {
  return (
    <div className="question-card-one">
      <h3 className="title-question-card">{title}</h3>
      <p className="answer-card">{answer}</p>
    </div>
  );
}

export default CardOne;
