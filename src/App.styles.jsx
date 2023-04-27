import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
    box-sizing: border-box;
  }

  ::placeholder {
    color: lightgray;
  }

  ::-webkit-datetime-edit {
    color: gray;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    background-image: url(../../src/assets/calendar.svg);
  }

  input[type="time"]::-webkit-calendar-picker-indicator {
    background-image: url(../../src/assets/clock.svg);
  }

  body {
    margin: 0;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    font-weight: normal
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 18px;
  }

  h3 {
    font-size: 16px;
  }

  h4 {
    font-size: 14px;
  }

  h5 {
    font-size: 12px;
  }

  input[type="text"], input[type="date"], input[type="time"] {
    font-size: 16px;
    height: 60px;
    width: 100%;
    border-radius: 30px;
    border: 1px solid lightgray;
    box-sizing: border-box;
    padding: 25px;
  }
`;

export const Container = styled.div`
  position: relative;
`;
