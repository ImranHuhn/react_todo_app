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

export const DateTimeWidth = styled.div`
  width: 45%;
`;

export const ButtonWidth = styled.div`
  width: 192px;
`;
