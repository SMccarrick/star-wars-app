import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>Star Wars</h1>
        <Hr />
      </Link>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  a {
    text-decoration: none;

    &:visited {
      color: ${props => props.theme.primary};
    }
  }
  h1 {
    font-size: 2.5rem;
  }
`;

const Hr = styled.hr`
  color: ${props => props.theme.secondary};
  width: 65%;
`;
