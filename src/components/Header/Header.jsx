import { LinkWrapper, NavBar, NavLinkStyled } from './Header.styled';
import { Container } from 'styles/GlobalStyles';

export const Header = () => {
  return (
    <NavBar>
      <Container>
        <LinkWrapper>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </LinkWrapper>
      </Container>
    </NavBar>
  );
};
