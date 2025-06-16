import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex:1;
    height: 100%;
    display: flex;
    background: ${({theme}) => theme.bg};
`;

const Left=styled.div`
    flex: 1;
    background:blue;
    @media (max-width: 700px) {
        display: none;
} 
`;
const Right=styled.div`
    flex:1;
    background:red;
}
`;

const Logo

const Authentication = () => {
  return (
    <Container>
      <Left>

      </Left>
      <Right></Right>
    </Container>
  )
}

export default Authentication
