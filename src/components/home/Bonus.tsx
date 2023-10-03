import IconText from '../utils/IconText';
import lock from '../../assets/icons/lock.png';
import device from '../../assets/icons/device.png';
import ticket from '../../assets/icons/ticket.png';

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
