import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: column;
  align-items: flex-start;
  width: 1220px;
  margin-top: 40px;
`;

const Container = styled.div`
  text-align: left;
`;

const Title = styled.h3`
  color: #2b3a39;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin: 0;
`;

const InstructionList = styled.ol`
  list-style-type: decimal;
  text-align: left;
  padding: 10px;
`;

const InstructionListItem = styled.li`
  color: #2b3a39;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 20px;
`;
const Line = styled.line`
    display: block;  
    width: 1305px;
    height: 0.5px;
    background:  #ccc;
    margin: 20px 0 20px 0;
`;

const Instructions = ({ instructions }) => {
  return (
    <>
    <Wrapper>
      {instructions && (
        <Container>
          <Title>Інструкція з приготування</Title>
          <InstructionList>
            {instructions.map((step, index) => (
              <InstructionListItem key={index}>{step}</InstructionListItem>
            ))}
          </InstructionList>
        </Container>
      )}
    </Wrapper><Line/>
    </>
  );
};

export default Instructions;
