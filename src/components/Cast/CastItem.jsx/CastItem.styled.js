import styled from 'styled-components';

export const CastItemWrapper = styled.li`
  padding: 20px;
  background-color: #333;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const CastItemImage = styled.img`
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const CastItemName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CastItemCharacter = styled.p`
  font-size: 14px;
  color: #ddd;
`;
