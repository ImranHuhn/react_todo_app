import React from "react";
import moment from "moment";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { RatingScale } from "../RatingScale";
import {
  ArrowIcon,
  DirectionalIcon,
  Calendar,
  EditIcon,
  CheckIcon,
} from "../IconComponent";
import {
  Container,
  Wrapper,
  Card,
  CardTitle,
  Dot,
  TaskNameH3,
  ButtonWrapper,
  Button,
  CardDetails,
  DateWrapper,
  CalendarIconWrapper,
  DateTextWrapper,
  DateText,
  PriorityWrapper,
  ArrowIconWrapper,
  ComplexityWrapper,
  DirectionalIconWrapper,
  TagsWrapper,
  TagsList,
  TagsItem,
  ProgressCircleWrapper,
  ProgressCircle,
  ProgressPercent,
} from "./CardItem.styles";

export const CardItem = (props) => {
  const dueDate = moment(props.item.dueDate);
  const todaysDate = moment();
  const daysLeft = dueDate.diff(todaysDate, "days");
  let cardColor = "";

  if (daysLeft < 1) {
    cardColor = "255, 64, 52";
  } else if (daysLeft < 4 && daysLeft > 0) {
    cardColor = "254, 126, 8";
  } else {
    cardColor = "13, 153, 255";
  }

  const handleCardClick = () => {
    props.handleDetailClick(props.item);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    props.handleEditClick(props.item);
  };

  const handleCheckClick = (e) => {
    e.stopPropagation();
    props.handleCheckClick(props.item);
  };

  return (
    <Container item={props.item} onClick={handleCardClick}>
      <Wrapper>
        <Card>
          <CardTitle>
            <Dot cardColor={cardColor}></Dot>
            <TaskNameH3>{props.item.taskName}</TaskNameH3>
          </CardTitle>
          <ButtonWrapper>
            <Button onClick={handleEditClick}>
              <EditIcon style={{ width: "20px", height: "20px" }} />
            </Button>
            <Button onClick={handleCheckClick}>
              <CheckIcon style={{ width: "20px", height: "20px" }} />
            </Button>
          </ButtonWrapper>
        </Card>
        <CardDetails>
          <div>
            <DateWrapper>
              <CalendarIconWrapper>
                <Calendar
                  style={{
                    width: "15px",
                    height: "15px",
                    display: "flex",
                  }}
                />
              </CalendarIconWrapper>
              <DateTextWrapper>
                Due Date:{" "}
                <DateText cardColor={cardColor}>
                  {props.item.dueDate &&
                    props.item.dueTime &&
                    moment(
                      props.item.dueDate + " " + props.item.dueTime,
                      "YYYY-MM-DD HH:mm"
                    ).format("MMMM Do YYYY, h:mm A")}{" "}
                </DateText>
              </DateTextWrapper>
            </DateWrapper>
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
                text="Priority: "
                radio={props.item.priority}
                htmlTag="small-card"
              />
            </PriorityWrapper>
            <ComplexityWrapper>
              <DirectionalIconWrapper>
                <DirectionalIcon style={{ width: "20px", height: "20px" }} />
              </DirectionalIconWrapper>
              <RatingScale
                text="Complexity: "
                radio={props.item.complexity}
                htmlTag="small-card"
              />
            </ComplexityWrapper>
            <TagsWrapper>
              <TagsList>
                {props.item.tags.map((tag) => {
                  return (
                    <TagsItem cardColor={cardColor} key={crypto.randomUUID()}>
                      <h5>{tag}</h5>
                    </TagsItem>
                  );
                })}
              </TagsList>
            </TagsWrapper>
          </div>
          <ProgressCircleWrapper>
            <ProgressCircle>
              <CircularProgressbarWithChildren
                styles={{
                  text: {
                    fontSize: "35px",
                    fill: "#002055",
                  },
                  path: {
                    stroke: `rgba(${cardColor}, 1)`,
                    strokeLinecap: "round",
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: `rgba(${cardColor}, .2)`,
                    strokeLinecap: "round",
                  },
                }}
                value={props.item.percent}
              >
                <div>
                  <ProgressPercent>{`${props.item.percent}%`}</ProgressPercent>
                </div>
              </CircularProgressbarWithChildren>
            </ProgressCircle>
          </ProgressCircleWrapper>
        </CardDetails>
      </Wrapper>
    </Container>
  );
};
