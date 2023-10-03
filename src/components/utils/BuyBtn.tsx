type IBtnProps = {
  content: string,
};

function BuyBtn({ content }: IBtnProps) {
  return (
    <button
      type="button"
      className="btn"
    >
      {content}
    </button>
  );
}

export default BuyBtn;
