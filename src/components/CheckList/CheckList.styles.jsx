import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const AddButton = styled.button`
  position: absolute;
  background-color: #0d99ff;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  right: 10px;
  top: 44px;
  cursor: pointer;
`;

export const List = styled.ul`
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  height: 60px;
  width: 100%;
  border-radius: 30px;
  box-sizing: border-box;
  background-color: #fff;
  margin: 10px auto;
  cursor: pointer;
`;

export const ItemName = styled.h3`
  padding: 25px;
  width: 100%;
`;

export const DeleteButton = styled.button`
  position: absolute;
  background-color: rgba(245, 88, 88, 0.8);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  right: 0;
  margin-right: 10px;
`;

export const EnterButton = styled.button`
  display: flex;
  justify-content: center;
  position: absolute;
  background-color: rgba(254, 126, 8, 0.8);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  right: 0;
  margin-right: 10px;
`;
