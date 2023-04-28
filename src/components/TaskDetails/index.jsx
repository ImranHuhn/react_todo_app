import React from "react";
import moment from "moment";
import {
  Container,
  Wrapper,
  CardWrapper,
  Card,
  CardWidth,
  TaskNameWrapper,
  TaskNameFlex,
  TaskNameColor,
  TaskNameText,
  CardDetails,
  DateWapper,
  CalendarIconWrapper,
  DateText,
  DateColor,
  PriorityWrapper,
  ArrowIconWrapper,
  ComplexityWrapper,
  DirectionalIconWrapper,
  ProgressBarWrapper,
  ProgressBarTitle,
  ProgressBarPercent,
  BarBackground,
  BarFill,
  TopMarginSpace,
  ButtonWideWrapper,
} from "./TaskDetails.styles";
import { HeaderText } from "../HeaderText";
import { CheckList } from "../CheckList";
import { RatingScale } from "../RatingScale";
import { ButtonWide } from "../ButtonWide";
import { Calendar, ArrowIcon, DirectionalIcon } from "../IconComponent";

class TaskDetails extends React.Component {
  handleRepeatClick = () => {
    this.props.clearChecklist();
  };

  handleDeleteClick = () => {
    this.props.deleteTask(this.props.aTask);
  };

  render() {
    return (
      <Container>
        <Wrapper>
          <HeaderText
            title="Task Details"
            arrowButton="arrow"
            editButton="edit"
            handleBackClick={this.props.handleBackClick}
            handleEditClick={this.props.handleEditClick}
            aTask={this.props.aTask}
          />
          <CardWrapper>
            <Card aTask={this.props.aTask}>
              <CardWidth>
                <TaskNameWrapper>
                  <TaskNameFlex>
                    <TaskNameColor
                      daysLeft={this.props.daysLeft}
                    ></TaskNameColor>
                    <TaskNameText>{this.props.aTask.taskName}</TaskNameText>
                  </TaskNameFlex>
                </TaskNameWrapper>
                <CardDetails>
                  <DateWapper>
                    <CalendarIconWrapper>
                      <Calendar
                        style={{
                          width: "15px",
                          height: "15px",
                          display: "flex",
                        }}
                      />
                    </CalendarIconWrapper>
                    <DateText>
                      Due Date:{" "}
                      <DateColor daysLeft={this.props.daysLeft}>
                        {this.props.aTask.dueDate &&
                          this.props.aTask.dueTime &&
                          moment(
                            this.props.aTask.dueDate +
                              " " +
                              this.props.aTask.dueTime,
                            "YYYY-MM-DD HH:mm"
                          ).format("MMMM Do YYYY, h:mm A")}{" "}
                      </DateColor>
                    </DateText>
                  </DateWapper>
                  <PriorityWrapper>
                    <ArrowIconWrapper>
                      <ArrowIcon
                        style={{
                          width: "20px",
                          height: "20px",
                          rotate: "90deg",
                        }}
                      />
                    </ArrowIconWrapper>
                    <RatingScale
                      htmlTag="large-card"
                      text="Priority: "
                      radio={this.props.aTask.priority}
                    />
                  </PriorityWrapper>
                  <ComplexityWrapper>
                    <DirectionalIconWrapper>
                      <DirectionalIcon
                        style={{ width: "20px", height: "20px" }}
                      />
                    </DirectionalIconWrapper>
                    <RatingScale
                      htmlTag="large-card"
                      text="Complexity: "
                      radio={this.props.aTask.complexity}
                    />
                  </ComplexityWrapper>
                  <ProgressBarWrapper>
                    <ProgressBarTitle>Task Complete</ProgressBarTitle>
                    <ProgressBarPercent daysLeft={this.props.daysLeft}>
                      {this.props.aTask.percent}%
                    </ProgressBarPercent>
                  </ProgressBarWrapper>
                  <BarBackground>
                    <BarFill
                      daysLeft={this.props.daysLeft}
                      percent={this.props.aTask.percent}
                    ></BarFill>
                  </BarBackground>
                </CardDetails>
              </CardWidth>
            </Card>
          </CardWrapper>
          <TopMarginSpace>
            {this.props.aTask.checklist.length !== 0 && (
              <h2>Checklist for subtasks</h2>
            )}
            <CheckList
              itemType="noninput"
              checklist={this.props.aTask.checklist}
              completedChecklist={this.props.completedChecklist}
            />
          </TopMarginSpace>
          <TopMarginSpace>
            <ButtonWideWrapper>
              <ButtonWide
                text="Repeat Task"
                icon="repeat"
                handleClick={this.handleRepeatClick}
              />
            </ButtonWideWrapper>
            <ButtonWideWrapper>
              <ButtonWide
                text="Delete Task"
                icon="trash"
                handleClick={this.handleDeleteClick}
                redButton
              />
            </ButtonWideWrapper>
          </TopMarginSpace>
        </Wrapper>
      </Container>
    );
  }
}

export default TaskDetails;
