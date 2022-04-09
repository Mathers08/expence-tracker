import React, {useContext} from 'react';
import styled from 'styled-components';
import {GlobalContext} from "../Context/GlobalState";

const IncomeExpenses = () => {
  return (
    <ListGroup>
      <ListGroupItem>
        <Income>Income</Income>
        <Span>${0.00}</Span>
      </ListGroupItem>
      <ListGroupItem>
        <Expense>Expense</Expense>
        <Span>${0.00}</Span>
      </ListGroupItem>
    </ListGroup>
  );
};

const ListGroup = styled.ul`
  display: flex;
  justify-content: center;
  font-family: monospace;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
`;
const ListGroupItem = styled.li`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
const Income = styled.div`
  background-color: #3ebf4f;
  padding: 10px 40px;
`;
const Expense = styled.div`
  background-color: #fa2a3d;
  padding: 10px 40px;
`;
const Span = styled.span`
  color: #000;
`;

export default IncomeExpenses;