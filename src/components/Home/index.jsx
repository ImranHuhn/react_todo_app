import React from "react";
import { ButtonWide } from "../ButtonWide";
import {
  MagnifyIcon,
  ArrowIcon,
  Chevron,
  DirectionalIcon,
  Calendar,
  EditIcon,
  CheckIcon,
} from "../IconComponent";

class Home extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "rgb(245, 245, 245)",
          margin: "0 auto",
        }}
      >
        <div style={{ width: "500px", padding: "50px 0" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MagnifyIcon width="44" height="44" />
            <input type="text" />
            <ArrowIcon width="44" height="44" style={{ rotate: "180deg" }} />
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#fff",
              borderRadius: "15px",
              padding: "15px",
            }}
          >
            <div style={{ width: "500px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "red",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                    }}
                  ></div>
                  <h3>Prepare for job interview</h3>
                </div>
                <div style={{ display: "flex" }}>
                  <button
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      border: "none",
                      margin: "auto 20px"
                    }}
                  >
                    <EditIcon style={{ width: "20px", height: "20px" }} />
                  </button>
                  <button
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      border: "none",
                    }}
                  >
                    <CheckIcon style={{ width: "20px", height: "20px" }} />
                  </button>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <Calendar
                        style={{
                          width: "15px",
                          height: "15px",
                          display: "flex",
                        }}
                      />
                    </div>
                    <h4>Due Date: Tomorrow, 9:00 AM</h4>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <ArrowIcon
                        style={{
                          width: "20px",
                          height: "20px",
                          rotate: "90deg",
                        }}
                      />
                    </div>
                    <h4>Priority: High (8/10)</h4>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <DirectionalIcon
                        style={{ width: "20px", height: "20px" }}
                      />
                    </div>
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
          <ButtonWide text="Add New Task" icon="plus" />
        </div>
      </div>
    );
  }
}

export default Home;
