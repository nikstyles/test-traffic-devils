import styled from 'styled-components';

const WrapSpinner = styled.div`
  /* background-color: ${props => props.theme.colors.background}; */
  @media (min-width: 768px) {
  }
`;

const Spinner = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  /* position: relative; */
  color: #fff;
  margin-top: 10%;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;

  @keyframes animloader {
    0% {
      box-shadow: -38px -6px, -14px 6px, 14px -6px;
    }
    33% {
      box-shadow: -38px 6px, -14px -6px, 14px 6px;
    }
    66% {
      box-shadow: -38px -6px, -14px 6px, 14px -6px;
    }
    100% {
      box-shadow: -38px 6px, -14px -6px, 14px 6px;
    }
  }
  @media (min-width: 768px) {
  }
`;

export default function Loading() {
  return (
    <WrapSpinner>
      <Spinner />
    </WrapSpinner>
  );
}
