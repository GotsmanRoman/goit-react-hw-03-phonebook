import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  border: 1px solid black;
`;
export const Label = styled.label``;
export const Input = styled.input`
  display: flex;
  margin-top: 10px;
  width: 200px;
  height: 30px;
  padding-left: 10px;
`;
export const Button = styled.button`
  width: 150px;
  height: 40px;
  padding: 10px;
  border: none;
  background-color: #c6c6c6;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;

  transition: background-color, color 250ms ease-in-out;

  :hover {
    background-color: #009f00;
    color: #fff;
  }
`;
