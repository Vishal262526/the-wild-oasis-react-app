import styled from "styled-components";
import Heading from "./Heading";

const StyledHeader = styled.header`
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

const Header = () => {
  return (
    <StyledHeader>
      <Heading>Header</Heading>
    </StyledHeader>
  );
};

export default Header;
