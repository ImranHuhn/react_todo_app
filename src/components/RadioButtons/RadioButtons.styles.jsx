import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  margin-bottom: 35px;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 470px;
`;

export const RadioItem = styled.div`
  position: relative;
`;

export const Input = styled.input`
  position: absolute;
  z-index: 1;
  opacity: 0;
  width: 30px;
  height: 30px;
  transform: translate(-15%, -15%);
  cursor: pointer;
`;

export const Text = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TextWrapper = styled.div`
  position: absolute;
  z-index: 0;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: ${(props) =>
    props.radioColor ? "rgba(13,153,255,1)" : "rgba(13,153,255,0.1)"};
  color: ${(props) => (props.radioColor ? "#fff" : "#000")};
`;
