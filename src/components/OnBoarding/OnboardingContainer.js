import React from 'react';
import styled from '@emotion/styled';

const OnboardingContainer = ({children}) => {
  return (
    <Container>
      <Title>Get started in four easy steps</Title>
      <Steps>{children}</Steps>
    </Container>
  )
};

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Steps = styled.div`
  background: white;
  border-radius: 10px;
  display: flex;
  padding: 0;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const Title = styled.h2`
  font-size: 24px;
  line-height: 48px;
  margin-bottom: 24px;
`;




export default OnboardingContainer;