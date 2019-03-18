import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <MainHeading>Star Wars</MainHeading>
    </div>
  );
};

export default Header;

const MainHeading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;
