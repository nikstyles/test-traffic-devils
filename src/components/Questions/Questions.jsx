// import { Promotion } from '../../components/Promotion/Promotion';
import Title from '../Title/Title';
import data from './data';
import ItemQuestion from './ItemQuestion';
import styled from 'styled-components';

const WrapQuestion = styled.ul`
  padding-top: 30px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  list-style-type: none;
  @media (min-width: 768px) {
    padding-top: 60px;
  }
`;
const Question = () => {
  return (
    <>
      <Title>Запитання та відповіді</Title>
      <WrapQuestion className="info">
        {data.map(question => (
          <ItemQuestion key={question.id} {...question} />
        ))}
      </WrapQuestion>
    </>
  );
};

export default Question;
