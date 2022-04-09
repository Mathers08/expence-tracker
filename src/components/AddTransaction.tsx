import React, {useContext, useState} from 'react';
import {Form, FormGroup, Label, Input} from "reactstrap";
import styled from 'styled-components';
import {GlobalContext} from "../Context/GlobalState";

const AddTransaction = () => {
  return (
    <div>
      <Header>Add Transaction</Header>
      <form action="">
        <div>
          <label htmlFor="">Text</label>
          <input type="text"/>
        </div>
        <div>
          <label htmlFor="">Amount</label>
          <input type="number"/>
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