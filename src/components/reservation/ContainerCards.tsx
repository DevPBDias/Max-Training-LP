import Card from './Card';
import exerciseOne from '../../assets/exerciseOne.png';
import exerciseTwo from '../../assets/exerciseTwo.png';
import exerciseThree from '../../assets/exerciseThree.png';

function ContainerCards() {
  return (
    <div className="cards-container-reservation">
      <Card
        image={ exerciseOne }
        text="Treinos de Mini Band"
      />
      <Card
        image={ exerciseTwo }
        text="Treinos de Giuliano do Corinthians"
      />
      <Card
        image={ exerciseThree }
        text="Treinos de Kettlebell"
      />
    </div>
  );
}

export default ContainerCards;
