import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    props.item.isComplete ? "rgba(13, 153, 255, 0.1);" : "#fff;"}
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
  background-color: rgba(${(props) => props.cardColor}, 0.8);
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

export const TaskNameH3 = styled.h3`
  font-weight: bold;
  margin: 5px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  background-color: rgba(13, 153, 255, 0.1);
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const CalendarIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

export const DateTextWrapper = styled.h4`
  margin: auto 5px;
  color: #808080;
`;

export const DateText = styled.span`
  font-weight: bold;
  color: rgba(${(props) => props.cardColor});
`;

export const PriorityWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const ArrowIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

export const ComplexityWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const DirectionalIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

export const TagsWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const TagsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

export const TagsItem = styled.li`
  background-color: rgba(${(props) => props.cardColor}, 0.1);
  padding: 6px 8px;
  border-radius: 15px;
  margin-right: 5px;
`;

export const ProgressCircleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProgressCircle = styled.div`
  width: 44px;
  height: 44px;
`;

export const ProgressPercent = styled.h5`
  font-size: 12;
  color: #002055;
  font-weight: bold;
`;