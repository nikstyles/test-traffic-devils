import styled from 'styled-components';

const Box = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  max-width: 480px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0 15px;
    max-width: 768px;
  }
  @media (min-width: 1100px) {
    max-width: 1200px;
  }
`;

export default function Container({ children }) {
  return <Box>{children}</Box>;
}
