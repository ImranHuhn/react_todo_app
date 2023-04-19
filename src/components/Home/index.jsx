import React from "react";
import { MagnifyIcon, ArrowIcon, Chevron } from "../IconComponent";

class Home extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "lightblue",
          margin: "0 auto",
        }}
      >
        <div style={{ width: "500px", padding: "50px 0", color: "black" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MagnifyIcon style={{ width: "30px", height: "30px" }} />
            <input type="text" />
            <ArrowIcon style={{ rotate: "180deg" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button style={{ display: "flex", alignItems: "center" }}>
              <h4>Sort</h4>
              <Chevron />
            </button>
            <button style={{ display: "flex", alignItems: "center" }}>
              <h4>Filter</h4>
              <Chevron />
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{width: "500px"}}>
              <div style={{ display: "flex" }}>
                <div>(i)</div>
                <h3>Prepare for job interview</h3>
                <button>edit</button>
                <button>complete</button>
              </div>
              <div style={{ display: "flex", justifyItems: "space-between" }}>
                <div>
                  <div style={{ display: "flex" }}>
                    <div>(i)</div>
                    <h4>Priority: High (8/10)</h4>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div>(i)</div>
                    <h4>Complexity: Moderate (5/10)</h4>
                  </div>
                  <div style={{ display: "flex" }}>
                    <h5>tag1</h5>
                    <h5>tag1</h5>
                    <h5>tag1</h5>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  progress circle
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
