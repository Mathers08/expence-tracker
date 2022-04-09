import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyled>
      Expense Tracker
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  padding: 15px;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  border-bottom: 2px solid white;
`;

export default Header;