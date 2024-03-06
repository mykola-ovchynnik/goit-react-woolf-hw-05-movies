import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: solid 1px #f2f2f2;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  transition: scale 0.3s;

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`;
