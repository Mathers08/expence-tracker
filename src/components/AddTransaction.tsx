import React, {useState} from 'react';
import styled from 'styled-components';
import {useTypedDispatch} from "../hooks";
import {addTransaction} from "../store/reducers/transaction";

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const onAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value);
  const dispatch = useTypedDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount
    }
    if (text && amount) {
      dispatch(addTransaction(newTransaction));
      setText('');
      setAmount('');
    }
  }

  return (
    <AddTransactionBlock>
      <Header>Add Transaction</Header>
      <form onSubmit={handleSubmit}>
        <FormItem>
          <label htmlFor="text">Text</label>
          <InputField
            type="text"
            value={text}
            onChange={onTextChange}
            maxLength={22}
            placeholder="Enter text..."
          />
        </FormItem>
        <FormItem>
          <label htmlFor="amount">Amount</label>
          <InputField
            type="number"
            value={amount}
            onChange={onAmountChange}
            placeholder="Enter amount..."
          />
        </FormItem>
        <Button>Add Transaction</Button>
      </form>
    </AddTransactionBlock>
  );
};

const AddTransactionBlock = styled.div`
  padding: 20px 0;
`;
const Header = styled.h2`
  padding: 15px;
  text-align: center;
  border-bottom: 2px solid #414040;
`;
const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 25px 15px;
`;
const InputField = styled.input`
  margin: 7px 0;
  padding: 13px 10px;
  border-radius: 13px;
  font-size: 14px;
  font-family: monospace;
  font-weight: 600;
  box-shadow: rgb(0 0 0 / 45%) 0px 25px 20px -20px;
`;
const Button = styled.button`
  margin: 25px auto;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  border-radius: 15px;
  background-color: #5167ff;
  border: none;
  color: aliceblue;
  font-weight: 700;
  font-size: 16px;
  font-family: monospace;
  cursor: pointer;
`;

export default AddTransaction;