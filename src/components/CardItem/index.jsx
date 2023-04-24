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

export const CardItem = (props) => {
  const percentage = 77;
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
    props.handleDetailClick();
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
    <div
      onClick={handleCardClick}
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: `${
          props.item.isComplete ? "rgba(13, 153, 255, 0.1)" : "#fff"
        }`,
        borderRadius: "15px",
        padding: "15px",
        marginBottom: "20px",
        cursor: "pointer",
        border: "none",
      }}
    >
      <div style={{ width: "500px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: `rgba(${cardColor},.8)`,
                borderRadius: "50%",
                width: "20px",
                height: "20px",
              }}
            ></div>
            <h3 style={{ fontWeight: "bold", margin: "5px" }}>
              {props.item.taskName}
            </h3>
          </div>
          <div style={{ display: "flex" }}>
            <button
              onClick={handleEditClick}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                border: "none",
                margin: "auto 20px",
                cursor: "pointer",
                backgroundColor: "rgba(13, 153, 255, 0.1)",
              }}
            >
              <EditIcon style={{ width: "20px", height: "20px" }} />
            </button>
            <button
              onClick={handleCheckClick}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "rgba(13, 153, 255, 0.1)",
              }}
            >
              <CheckIcon style={{ width: "20px", height: "20px" }} />
            </button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", marginBottom: "5px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                }}
              >
                <Calendar
                  style={{
                    width: "15px",
                    height: "15px",
                    display: "flex",
                  }}
                />
              </div>
              <h4 style={{ margin: "auto 5px", color: "#808080" }}>
                Due Date:{" "}
                <span
                  style={{ fontWeight: "bold", color: `rgba(${cardColor})` }}
                >
                  {props.item.dueDate &&
                    props.item.dueTime &&
                    moment(
                      props.item.dueDate + " " + props.item.dueTime,
                      "YYYY-MM-DD HH:mm"
                    ).format("MMMM Do YYYY, h:mm A")}{" "}
                </span>
              </h4>
            </div>
            <div style={{ display: "flex", marginBottom: "5px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                }}
              >
                <ArrowIcon
                  style={{
                    width: "20px",
                    height: "20px",
                    rotate: "90deg",
                  }}
                />
              </div>
              <RatingScale text="Priority: " radio={props.item.priority} />
            </div>
            <div style={{ display: "flex", marginBottom: "5px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                }}
              >
                <DirectionalIcon style={{ width: "20px", height: "20px" }} />
              </div>
              <RatingScale text="Complexity: " radio={props.item.complexity} />
            </div>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <ul
                style={{
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                }}
              >
                {props.item.tags.map((tag) => {
                  return (
                    <li
                      key={crypto.randomUUID()}
                      style={{
                        backgroundColor: `rgba(${cardColor},.2)`,
                        padding: "6px 8px",
                        borderRadius: "15px",
                        marginRight: "5px",
                      }}
                    >
                      <h5>{tag}</h5>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "44px", height: "44px" }}>
              <CircularProgressbarWithChildren
                styles={{
                  text: {
                    fontSize: "35px",
                    fill: "#002055",
                  },
                  path: {
                    stroke: `rgba(${cardColor}, ${percentage / 100})`,
                    strokeLinecap: "round",
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: "#D1E2FE",
                    strokeLinecap: "round",
                  },
                }}
                value={percentage}
              >
                <div>
                  <h5
                    style={{
                      fontSize: 12,
                      color: "#002055",
                      fontWeight: "bold",
                    }}
                  >{`${percentage}%`}</h5>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
