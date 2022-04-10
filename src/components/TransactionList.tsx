import React from 'react';
import Transaction from "./Transaction";
import styled from 'styled-components';
import {useTypedDispatch, useTypedSelector} from "../hooks";
import {clearTransactions} from "../store/reducers/transaction";

const TransactionList = () => {
  const dispatch = useTypedDispatch();
  const {transactions} = useTypedSelector(state => state.transaction);
  const onClearClick = () => dispatch(clearTransactions());

  return (
    <List>
      <Header>History</Header>
      <ListGroup>
        {transactions.length
          ? transactions.map(transaction => (
            <Transaction
              key={transaction.id}
              transaction={transaction}
            />))
          : <Paragraph>There are no transactions yet</Paragraph>
        }
      </ListGroup>
      {transactions.length > 1 && <Button onClick={onClearClick}>Clear All</Button>}
    </List>
  );
};

const List = styled.div`
  margin: 20px 0;
`;
const Header = styled.h2`
  padding: 15px;
  text-align: center;
  border-bottom: 2px solid #414040;
`;
const ListGroup = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
`;
const Paragraph = styled.p`
  text-align: center;
`;
const Button = styled.button`
  margin: 20px auto;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  border-radius: 15px;
  background-color: #dc3545;
  border: none;
  color: aliceblue;
  font-weight: 700;
  font-size: 16px;
  font-family: monospace;
  cursor: pointer;
`;

export default TransactionList;