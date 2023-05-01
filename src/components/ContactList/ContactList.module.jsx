import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Element = styled.li`
  padding: 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Button = styled.button`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  padding: 10px;
  border: none;
  background-color: #c6c6c6;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;

  transition: background-color, color 250ms ease-in-out;

  :hover {
    background-color: #ad2828;
    color: #fff;
  }
`;
