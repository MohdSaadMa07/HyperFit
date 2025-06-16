import React from 'react';
import styled from 'styled-components';
import logoImage from "../utils/Images/logo.jpg";
import AuthImage from "../utils/Images/AuthImage.jpg";

const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.bg};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 40px;
  left: 40px;
  z-
  `;

const Image = styled.img`
  width: 80%;
  max-width: 400px;
  height: auto;
`;

const Authentication = () => {
  return (
    <Container>
      <Left>
        <Logo src={logoImage} alt="Logo" />
        <Image src={AuthImage} alt="Authentication Visual" />
      </Left>
      <Right>
        
      </Right>
    </Container>
  );
};

export default Authentication;
