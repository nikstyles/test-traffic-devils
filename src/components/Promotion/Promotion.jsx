// import { Promotion } from '../../components/Promotion/Promotion';
import Title from '../../components/Title/Title';
import icon1 from '../../images/icon_1.png';
import icon2 from '../../images/icon_2.png';
import icon3 from '../../images/icon_3.png';
import line from '../../images/line.svg';
import { useState, useEffect } from 'react';

import styled from 'styled-components';
const ListTask = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding-top: 30px;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  @media (min-width: 768px) {
    padding-top: 60px;

    flex-direction: row;
  }
  @media (min-width: 1100px) {
  }
`;
const ItemTask = styled.li`
  display: flex;
  width: 170px;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

const ItemText = styled.p`
  padding-top: 20px;
  font-size: 16px;
  line-height: 20px;
`;
const AccentText = styled.span`
  color: ${props => props.theme.colors.accent};
`;
const Line = styled.img`
  max-width: 855px;
  position: absolute;
  top: 180px;
  left: 15%;
  z-index: -1;
  @media (min-width: 768px) {
    max-width: 500px;
  }
  @media (min-width: 1100px) {
    max-width: 855px;
  }
`;

const Promotion = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );
  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);
  return (
    <>
      <Title>Умови акції</Title>
      <ListTask>
        <ItemTask>
          <img alt="" src={icon1} />
          <ItemText>
            Зробити фото з <AccentText>продуктом</AccentText> в соціальних
            мережах з хештегом <AccentText>#фірми</AccentText>
          </ItemText>
        </ItemTask>
        <ItemTask>
          <img alt="" src={icon2} />
          <ItemText>Брати участь в розіграші пилососу Dyson</ItemText>
        </ItemTask>
        <ItemTask>
          <img alt="" src={icon3} />
          <ItemText>
            Кожну неділю визначається <br />
            <AccentText>2 переможці</AccentText>
          </ItemText>
        </ItemTask>
      </ListTask>
      {matches ? <Line alt="" src={line} /> : ''}
    </>
  );
};

export default Promotion;
