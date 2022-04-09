import React, {useContext} from 'react';
import Transaction from "./Transaction";
import styled from 'styled-components';
import {GlobalContext} from "../Context/GlobalState";

const TransactionList = () => {
  return (
    <List>
      <Header>History</Header>
      <ListGroup>
        {/*{
          transactions.length
            ? transactions.map(transaction => (
              <Transaction
                key={transaction.id}
                transaction={transaction}
              />))
            : <Paragraph>There are no transactions yet</Paragraph>
        }*/}
      </ListGroup>
      <Button color="danger">Clear All</Button>
    </List>
  );
};

const List = styled.div`
  margin: 20px 0;
`;
const Header = styled.h3`
  padding: 15px;
  text-align: center;
  border-bottom: 2px solid white;
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
  margin: 25px 0;
  padding: 5px;
  width: 100%;
  border-radius: 7px;
  background-color: #dc3545;
  border: none;
  color: #fff;
`;

export default TransactionList;