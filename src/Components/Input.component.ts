import styled from "styled-components";

const Input = styled('input')`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 4px;
  margin: 10px 0;
  max-width: 100%;
  padding: 15px 24px;
  width: 320px;

  &:focus {
    border: none;
    outline: none;
  }
`

export default Input