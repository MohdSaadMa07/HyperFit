import React from 'react';
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from './Button';

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  font-weight: 700; /* Makes all children bold */
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;

const Span = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const Signin = () => {
  return (
    <Container>
      <div>
        <Title>Welcome to HyperFit</Title>
        <br />
        <br />
        <Span>Please login with your details</Span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          fontWeight: 700, // Ensures bold inside inline styles too
        }}
      >
        <TextInput 
          label="Email" 
          placeholder="Enter your Email address" 
        />
        <TextInput 
          label="Password" 
          placeholder="Enter your password"
          password 
        />
        <Button text="SignIn"/>
      </div>
    </Container>
  );
};

export default Signin;
