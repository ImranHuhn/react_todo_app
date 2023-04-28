import React from "react";
import { SmallCard, LargeCard, Color } from "./RatingScale.styles";

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
    <div>
      {props.htmlTag === "small-card" && (
        <SmallCard>
          {props.text}
          <Color>
            {ratingScale} ({props.radio}/10)
          </Color>
        </SmallCard>
      )}
      {props.htmlTag === "large-card" && (
        <LargeCard>
          {props.text}
          <Color>
            {ratingScale} ({props.radio}/10)
          </Color>
        </LargeCard>
      )}
    </div>
  );
};
