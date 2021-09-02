import { GoGear } from "react-icons/go";
import { Actions, Container, Logo } from "./Header.styled";

export const Header = () => {
  return (
    <Container>
      <Actions>
        <GoGear />
      </Actions>
      <Logo>Remarkable.</Logo>
    </Container>
  );
};
