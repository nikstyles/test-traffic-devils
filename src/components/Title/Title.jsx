// import { Promotion } from '../../components/Promotion/Promotion';
import styled from 'styled-components';
const TitleText = styled.h2`
  font-weight: 400;
  font-size: 30px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #000;
  text-align: center;
  margin-top: 50px;

  @media (min-width: 768px) {
    font-size: 48px;
    margin-top: 100px;
  }
  @media (min-width: 1100px) {
  }
`;
const Title = ({ children }) => {
  return (
    <>
      <TitleText>{children}</TitleText>
    </>
  );
};

export default Title;
