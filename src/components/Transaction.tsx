import React, {useContext} from 'react';
import styled from 'styled-components';
import {GlobalContext} from "../Context/GlobalState";

const Transaction = () => {
  return (
    <ListGroupItem>
      <h5>text</h5>
      <h5>0.00</h5>
      <Button color="secondary">X</Button>
    </ListGroupItem>
  );
};

const ListGroupItem = styled.ul`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0.75rem 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
const Button = styled.button`
  padding: 0 5px;
  border: 2px solid #fff;
`;

export default Transaction;