type IBtnProps = {
  content: string,
};

function BuyBtn({ content }: IBtnProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
      href="https://pay.hotmart.com/N87170150D?sck=HOTMART_PRODUCT_PAGE&off=imswnf01&hotfeature=32&_gl=1*o61697*_ga*MTgyODk2NTUzMi4xNjk1ODMyOTA4*_ga_GQH2V1F11Q*MTY5NjM2Njc0Mi43LjEuMTY5NjM2NjgxNy41OS4wLjA.&bid=1696366857665"
    >
      {content}
    </a>
  );
}

export default BuyBtn;
