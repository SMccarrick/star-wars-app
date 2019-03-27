import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>Star Wars</h1>
      </Link>
      <h2>Choose a episode below!</h2>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  text-align: center;
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
