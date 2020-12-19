import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #03a9fc;
`;

const FormContainer = styled.div`
  margin-top: 100px;
  border: 1px solid red;
  width: 20%;
  input {
    width: 100%;
    padding: 12px 20px;
    text-align:center;
    border: 2px solid #000;
  }
`;

function App() {
  return (
    <AppContainer>
      <FormContainer>
        <input type='text' placeholder='Add text to convert'></input>
      </FormContainer>

    </AppContainer>
  );
}

export default App;
