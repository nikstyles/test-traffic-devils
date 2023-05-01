import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import styled from 'styled-components';

const WrapQuestion = styled.li`
  max-width: 100%;
  min-height: 60px;
  background-color: #fff;
  border-radius: 20px;
  font-size: 16px;
  padding: 20px;
`;
const Question = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.div`
  max-width: 100%;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

const Answer = styled.div`
  padding-top: 10px;
`;

const ItemQuestion = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <WrapQuestion>
      <Question>
        <h4 onClick={() => setExpanded(!expanded)}>{title}</h4>
        <Button onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </Button>
      </Question>
      {expanded && <Answer>{info}</Answer>}
    </WrapQuestion>
  );
};

export default ItemQuestion;
