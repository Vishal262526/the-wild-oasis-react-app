import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";

function App() {

  const Button = styled.button`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    border: none;
    border-radius: 7px;
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
    cursor: pointer;
  `;

  return <>
  
    <GlobalStyle />

    <h1>Hello World</h1>
    <Button>Hello World</Button>
  </>
}

export default App;
