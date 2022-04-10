import React from 'react';
import styled from 'styled-components';
import {useTypedSelector} from "../hooks";

const Balance = () => {
  const {transactions} = useTypedSelector(state => state.transaction);
  const amount = transactions.map(transaction => transaction.amount);
  const total = amount.reduce((acc, val) => acc += val, 0);
  const sign = total >= 0 ? '' : '-';

  return (
    <BalanceBlock>
      <H1>Your Balance:</H1>
      <Paragraph>{sign}${Math.abs(total).toFixed(2)}</Paragraph>
    </BalanceBlock>
  );
};

const BalanceBlock = styled.div`
  padding: 40px;
`;
const H1 = styled.h1`
  font-size: 42px;
  margin: 0;
`;
const Paragraph = styled.p`
  margin: 0;
  font-size: 34px;
  font-weight: 700;
`;

export default Balance;
