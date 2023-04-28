import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: "100%";
  background-color: rgb(245, 245, 245);
  margin: 0 auto;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  width: 500px;
  padding: 50px 0;
`;

export const SearchBarWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  background-color: rgba(13, 153, 255, 0.1);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin: auto 10px;
  border: none;
  cursor: pointer;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonWideWrapper = styled.div`
  margin: 10px auto 20px;
  width: 192px;
`;
