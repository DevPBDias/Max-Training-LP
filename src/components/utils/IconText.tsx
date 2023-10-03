type IconProps = {
  image: string,
  text: string
};

function IconText({ image, text }: IconProps) {
  return (
    <div className="icon-container">
      <img src={ image } alt="" className="icon" />
      <p className="text-icon">{text}</p>
    </div>
  );
}

export default IconText;
