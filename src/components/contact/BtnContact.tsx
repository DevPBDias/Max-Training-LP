type IBtnProps = {
  text: string,
  icon: string,
  link: string,
};

function BtnContact({ text, icon, link }: IBtnProps) {
  return (
    <a
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
