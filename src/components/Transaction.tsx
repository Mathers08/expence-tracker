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
      <h5>{transaction.text}</h5>
      <h5>{sign}${Math.abs(transaction.amount)}</h5>
      <Button color="secondary" onClick={onDeleteClick}>X</Button>
    </ListGroupItem>
  );
};

const ListGroupItem = styled.ul<TransactionProps>`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0.75rem 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  background-color: ${props => props.transaction.amount >= 0 ? '#3ebf4f' : '#fa2a3d'};
`;
const Button = styled.button`
  padding: 0 5px;
  border: 2px solid #fff;
`;

export default Transaction;