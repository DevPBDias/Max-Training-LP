type IBtnProps = {
  text: string,
  icon: string,
  link: string,
};

function BtnContact({ text, icon, link }: IBtnProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={ link }
      className="btn-contact"
    >
      <img
        src={ icon }
        alt={ icon }
        className="icon-contact"
      />
      <p className="text-link">{text}</p>
    </a>
  );
}

export default BtnContact;
