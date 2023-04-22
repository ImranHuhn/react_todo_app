import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f5f5f5;
  margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
  width: 500px;
  padding: 50px 0;
`;

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
