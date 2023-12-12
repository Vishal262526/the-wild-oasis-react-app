import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
import Button from "./ui/Button";

const StyleApp = styled.main`
  padding: 2rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyleApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as={"h1"}>The Wild Oasis</Heading>
            <div>
              <Heading as={"h2"}>Check in and out</Heading>
              <Button variation="primary" size="md">
                Check In
              </Button>
              <Button variation="secondary" size="md">
                Check Out
              </Button>
            </div>
          </Row>
          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form></form>
          </Row>
        </Row>
      </StyleApp>
    </>
  );
}

export default App;
