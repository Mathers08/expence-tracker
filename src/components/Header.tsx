import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderBlock>
      Expense Tracker
    </HeaderBlock>
  );
};

const HeaderBlock = styled.header`
  padding: 25px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  border-bottom: 2px solid #414040;
`;

export default Header;