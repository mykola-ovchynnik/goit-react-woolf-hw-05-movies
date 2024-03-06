import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  width: fit-content;
  margin-left: 60px;
  margin-right: 60px;

  @media screen and (min-width: 768px) {
    max-width: 768px; /* For tablets */
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px; /* For desktops */
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px; /* For larger desktops */
  }
`;

export const PageHeader = styled.h2`
  margin-bottom: 30px;
`;

export const LinkButton = styled(Link)`
  display: inline-block;
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 8px;
  color: black;
`;
