import React from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #03a9fc;
`;

const Content = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  // align-items: center;
`;
const FormContainer = styled.div`
  // border: 1px solid red;
  width: 100%;
  input {
    // width: 100%;
    padding: 12px 20px;
    text-align:center;
    border: 2px solid #000;
  }
`;

const QRContainer = styled.div`
  border: 1px solid red;
  margin-top: 50px;
`;

function App() {
  const downloadQR = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <AppContainer>
      <Content>
        <FormContainer>
          <input type='text' placeholder='Add text to convert'></input>
        </FormContainer>

        <QRContainer>
          <QRCode
            id="123456"
            value="123456"
            size={290}
            level={"H"}
            includeMargin={true}
          />
        </QRContainer>

        <a onClick={downloadQR}> Download QR </a>
      </Content>
    </AppContainer>
  );
}

export default App;
