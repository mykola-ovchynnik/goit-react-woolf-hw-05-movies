import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  min-width: 300px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.li`
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  transition: transform 0.2s;
  position: relative;

  &:hover {
    cursor: pointer;
    color: #008080;
    border-color: #008080;
    transform: translateX(15px);
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  padding: 8px;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: #008080;
  }
`;
