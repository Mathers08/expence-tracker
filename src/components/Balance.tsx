import React, {useContext} from 'react';
import styled from 'styled-components';
import {useTypedSelector} from "../hooks";

const Balance = () => {
  const {transactions} = useTypedSelector(state => state.transaction);
  const amount = transactions.map(transaction => transaction.amount);
  const total = amount.reduce((acc, val) => acc += val, 0);
  const sign = total >= 0 ? '' : '-';

  return (
    <Main>
      <h3>Your Balance:</h3>
      <h1>{sign}${Math.abs(total).toFixed(2)}</h1>
    </Main>
  );
};

const Main = styled.main`
  padding: 40px 0;
`;

export default Balance;
