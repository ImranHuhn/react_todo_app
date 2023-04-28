import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  height: 50px;
  width: 45%;
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 30px;
  padding: 10px 40px;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

export const ButtonName = styled.h3`
  font-weight: bold;
`;
