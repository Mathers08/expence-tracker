import React from 'react';
import styled from 'styled-components';
import {useTypedSelector} from "../hooks";

const IncomeExpenses = () => {
  const {transactions} = useTypedSelector(state => state.transaction);
  const amount = transactions.map(transaction => transaction.amount);
  const income = amount.filter(sum => sum >= 0).reduce((acc, val) => acc += val, 0).toFixed(2);
  const expense = (amount.filter(sum => sum < 0).reduce((acc, val) => acc += val, 0) * -1).toFixed(2);

  return (
    <ListGroup>
      <ListGroupItem>
        <Income>Income</Income>
        <span>${income}</span>
      </ListGroupItem>
      <ListGroupItem>
        <Expense>Expense</Expense>
        <span>${expense}</span>
      </ListGroupItem>
    </ListGroup>
  );
};

const ListGroup = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding-left: 0;
`;
const ListGroupItem = styled.li`
  box-shadow: rgb(0 0 0 / 35%) 0 5px 15px;
  border-radius: 20px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  background-color: #3e3939;
  display: block;
  padding: 15px 25px;
`;
const Income = styled.div`
  background-color: #3ebf4f;
  padding: 8px 45px;
  margin: 10px 0;
`;
const Expense = styled.div`
  background-color: #fa2a3d;
  padding: 8px 40px;
  margin: 10px 0;
`;

export default IncomeExpenses;