import Container from '../../components/Container/Container';
import Promotion from '../../components/Promotion/Promotion';
import Questions from '../../components/Questions/Questions';
import Prize from '../../components/Prize/Prize';

const Sweepstake = () => {
  return (
    <Container>
      <Promotion />
      <Questions />
      <Prize />
    </Container>
  );
};

export default Sweepstake;
