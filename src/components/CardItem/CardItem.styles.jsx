import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${(props) =>
      props.item.isComplete ? "rgba(13, 153, 255, 0.1);" : "#fff;"
    }
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 20px;
    cursor: pointer;
    border: none;
`;

export const Wrapper = styled.div`
  width: 500px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const CardTitle = styled.div`
  display: flex;
  alignitems: center;
`;

export const Dot = styled.div`
background-color: rgba(${(props) => props.cardColor},.8);
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;


