type ICardProps = {
  image: string,
  text: string,
};

function Card({ image, text }: ICardProps) {
  return (
    <div
      className="card-reservation"
    >
      <img src={ image } alt="" className="exercises-img" />
      <h3 className="name-exercise">{text}</h3>
    </div>
  );
}

export default Card;
