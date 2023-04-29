import s from './Homepage.module.css';
import Container from '../components/Container/Container';
import Hero from '../components/Hero/Hero';

const Homepage = () => {
  return (
    <Container>
      <h1 className={s.h_delete}>Welcome page</h1>
      <Hero />
    </Container>
  );
};

export default Homepage;
