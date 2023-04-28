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

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  border: none;
  cursor: pointer;
  background-color: rgba(13, 153, 255, 0.1);
`;

export const EditButtonWrapper = styled.div`
  position: absolute;
  right: 0;
`;
