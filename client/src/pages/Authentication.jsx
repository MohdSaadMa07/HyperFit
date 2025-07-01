import React, { useState } from "react";
import styled from "styled-components";
import LogoImage from "../utils/Images/logo.jpg";
import AuthImage from "../utils/Images/AuthImage.jpg";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  overflow: hidden;
  }
`;
const Left = styled.div`
  flex: 1;
  position: relative;
  max-height: 100vh;
  @media (max-width: 700px) {
    display: none;
  margin-top: 0;
  overflow: hidden;
  }
`;
const Logo = styled.img`
  position: absolute;
  width: 110px;
  height: 110px;
  top: 40px;
  left: 60px;
  z-index: 10;
`;
const Image = styled.img`
  position: relative;
  height: 100vh;
  width: 100%;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  max-height: 100vh;
  display: flex;
  overflow: hidden;
  margin-top: 70px;
  
  flex-direction: column;
  ;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 16px;
  color: red;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 400px) {
    font-size: 14px;
  height: 25vh;
  }
`;
const TextButton = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  top-margin: 10px;
  
`;

const Authentication = () => {
  const [login, setLogin] = useState(false);
  return (
    <Container>
      <Left>
        <Logo src={LogoImage} />
        <Image src={AuthImage} />
      </Left>
      <Right>
        {!login ? (
          <>
            <Signin />
            <Text>
              Don't have an account?{" "}
              <TextButton onClick={() => setLogin(true)}>SignUp</TextButton>
            </Text>
          </>
        ) : (
          <>
            <Signup />
            <Text>
              Already have an account?{" "}
              <TextButton onClick={() => setLogin(false)}>SignIn</TextButton>
            </Text>
          </>
        )}
      </Right>
    </Container>
  );
};

export default Authentication;