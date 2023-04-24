import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ArrowButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  background-color: #FFFFF;
`;

export const ArrowButton = styled.button`
  background-color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;