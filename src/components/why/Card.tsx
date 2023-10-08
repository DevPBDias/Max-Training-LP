import check from '../../assets/icons/check.webp';

type ICardProps = {
  title: string,
  content: string,
};

function Card({ content, title }: ICardProps) {
  return (
    <div className="card">
      <img src={ check } alt="Check" className="icon-why" />
      <h3 className="title-card">{title}</h3>
      <p className="content-text-card">{content}</p>
    </div>
  );
}

export default Card;
