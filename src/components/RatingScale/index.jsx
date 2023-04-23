import React from "react";

export const RatingScale = (props) => {
  let ratingScale = "";
  if (props.radio > 7 && props.radio <= 10) {
    ratingScale = "High";
  } else if (props.radio > 4 && props.radio <= 7) {
    ratingScale = "Moderate";
  } else {
    ratingScale = "Low";
  }
  return (
    <h4 style={{ margin: "auto 5px", color: "#808080" }}>
      {props.text}
      <span style={{ color: "#000000" }}>
        {ratingScale} ({props.radio}/10)
      </span>
    </h4>
  );
};
