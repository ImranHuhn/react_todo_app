import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  border-radius: 30px;
  border: none;
  background-color: ${(props) =>
    props.redButton ? "rgba(255, 224, 222, 1);" : "rgba(13, 153, 255, 1);"};
  color: ${(props) => props.redButton ? "#000;" : "#fff;"};
  cursor: pointer;
  margin: auto;
`;
