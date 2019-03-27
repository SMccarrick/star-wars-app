import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Link to="/">
      <MainHeading>Star Wars</MainHeading>
    </Link>
  );
};

export default Header;

const MainHeading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  a {
    text-decoration: none;

    &:visited {
      color: ${props => props.theme.primary};
    }
  }
`;
