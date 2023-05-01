import Title from '../../components/Title/Title';
import styled from 'styled-components';
import React, { useState } from 'react';
import data from './data';

const WrapList = styled.div`
  padding-bottom: 100px;
  padding-top: 30px;
  @media (min-width: 768px) {
    padding-top: 60px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 20px;
  column-gap: 0;
  padding: 30px;
  @media (min-width: 768px) {
    row-gap: 30px;
    column-gap: 0;
    padding: 40px;
  }
  @media (min-width: 1100px) {
    row-gap: 100px;
    column-gap: 170px;
    padding: 80px;
  }
`;

const ItemPrize = styled.li`
  display: flex;
  justify-content: center;
`;
const ImagePrize = styled.img`
  max-width: 70px;
  cursor: pointer;

  @media (min-width: 370px) {
    max-width: 90px;
  }
  @media (min-width: 400px) {
    max-width: 100px;
  }
  @media (min-width: 768px) {
    max-width: 60%;
  }
  @media (min-width: 1100px) {
    max-width: 100%;
  }
`;
const Prize = () => {
  const [count, setCount] = useState(0);
  const [id, setId] = useState(0);
  console.log(count);

  const handleChange = idPrize => {
    setCount(count + 1);
    setId(idPrize);
  };

  const win = idPrize => {
    return id === idPrize && count === 3;
  };

  return (
    <>
      <Title>Обери подарунок</Title>
      <WrapList>
        <List>
          {data.map(prize => (
            <ItemPrize key={prize.id}>
              <ImagePrize
                alt=""
                src={win(prize.id) ? prize.winImg : prize.prizeImg}
                onClick={() => handleChange(prize.id)}
              />
            </ItemPrize>
          ))}
        </List>
      </WrapList>
    </>
  );
};

export default Prize;
