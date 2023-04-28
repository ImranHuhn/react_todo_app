import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgb(245, 245, 245);
  margin: 0 auto;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  width: 500px;
  padding: 50px 0;
  position: relative;
`;

export const CardWrapper = styled.div`
  margin-top: 30px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    props.aTask.isComplete ? "rgba(13, 153, 255, 0.1);" : "#fff;"};
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
`;

export const CardWidth = styled.div`
  width: 100%;
`;

export const TaskNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TaskNameFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const TaskNameColor = styled.div`
  background-color: rgba(${(props) => props.daysLeft}, 0.8);
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

export const TaskNameText = styled.h1`
  font-weight: bold;
  margin: 5px;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateWapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const CalendarIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

export const DateText = styled.h2`
  margin: auto 5px;
  color: #808080;
`;

export const DateColor = styled.span`
  color: rgba(${(props) => props.daysLeft});
`;

export const PriorityWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
`;

export const DirectionalIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ProgressBarTitle = styled.h2`
  fontweight: bold;
`;

export const ProgressBarPercent = styled.h2`
  font-weight: bold;
  color: rgb(${(props) => props.daysLeft});
`;

export const BarBackground = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  height: 15px;
  width: 100%;
  margin: 5px auto 10px;
  position: relative;
`;

export const BarFill = styled.div`
  background-color: rgb(${(props) => props.daysLeft});
  width: ${(props) => props.percent}%;
  height: 100%;
  position: absolute;
  left: 0;
  border-radius: 10px;
`;

export const TopMarginSpace = styled.div`
  margin-top: 30px;
`;

export const ButtonWideWrapper = styled.div`
  margin: 10px auto 20px;
  width: 80%;
`;
