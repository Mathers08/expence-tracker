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
    if (text) {
      dispatch(addTransaction(newTransaction));
      setText('');
      setAmount('');
    }
  }

  return (
    <div>
      <Header>Add Transaction</Header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={onTextChange}
            maxLength={16}
            placeholder="Enter text..."
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={onAmountChange}
            placeholder="Enter amount..."
          />
        </div>
        <Button>Add Transaction</Button>
      </form>
    </div>
  );
};

const Header = styled.h3`
  padding: 15px;
  text-align: center;
  border-bottom: 2px solid white;
`;

const Button = styled.button`
  margin: 25px 0;
  padding: 5px;
  width: 100%;
  border-radius: 7px;
  background-color: #5167ff;
  border: none;
  color: #fff;
`;

export default AddTransaction;