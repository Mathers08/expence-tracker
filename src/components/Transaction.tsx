import React from 'react';
import styled from 'styled-components';
import {ITransaction} from "../store/reducers/transaction/types";
import {useTypedDispatch} from "../hooks";
import {deleteTransaction} from "../store/reducers/transaction";

interface TransactionProps {
  transaction: ITransaction;
}

const Transaction = ({transaction}: TransactionProps) => {
  const dispatch = useTypedDispatch();
  const onDeleteClick = () => dispatch(deleteTransaction(transaction.id));
  const sign = transaction.amount >= 0 ? '' : '-';

  return (
    <ListGroupItem transaction={transaction}>
      <h4>{transaction.text}</h4>
      <SalaryDeleteBlock>
        <h4>{sign}${Math.abs(transaction.amount)}</h4>
        <Button onClick={onDeleteClick}>X</Button>
      </SalaryDeleteBlock>
    </ListGroupItem>
  );
};

const ListGroupItem = styled.ul<TransactionProps>`
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 25%) 0 25px 50px -12px;
  margin: 15px auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  color: aliceblue;
  background-color: ${props => props.transaction.amount >= 0 ? '#3ebf4f' : '#fa2a3d'};
`;
const SalaryDeleteBlock = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  cursor: pointer;
  color: aliceblue;
  font-weight: 700;
  padding-left: 50px;
  font-size: 15px;
  border: 2px solid transparent;
  background: none;
`;

export default Transaction;