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

// export const List = styled.ul`
//   padding: 0;
// `;