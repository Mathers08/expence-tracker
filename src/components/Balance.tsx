import React, {useContext} from 'react';
import {GlobalContext} from "../Context/GlobalState";
import styled from 'styled-components';

const Balance = () => {
  return (
    <Main>
      <h3>Your Balance:</h3>
      <h1>$0.00</h1>
    </Main>
  );
};

const Main = styled.main`
  padding: 40px 0;
`;

export default Balance;
