import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f5f5f5;
  margin: 0 auto;
  // position: absolute;
  // z-index: 2;
`;

export const Wrapper = styled.div`
  width: 500px;
  padding: 50px 0;
`;

export const TaskNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 25px;
`;

export const DateTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
`;

export const SaveButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 45px;
`;

// export const SaveButton = styled.button`
//   height: 60px;
//   width: 192px;
//   border-radius: 30px;
//   border: none;
//   background-color: #0d99ff;
//   color: #fff;
//   cursor: pointer;
// `;
