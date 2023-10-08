import IconText from '../utils/IconText';
import lock from '../../assets/icons/lock.webp';
import device from '../../assets/icons/device.webp';
import ticket from '../../assets/icons/ticket.webp';

function Bonus() {
  return (
    <div className="bonus-container">
      <IconText image={ ticket } text="Garantia de 7 dias" />
      <IconText image={ lock } text="1 ano de acesso" />
      <IconText image={ device } text="Qualquer plataforma" />
    </div>
  );
}

export default Bonus;
