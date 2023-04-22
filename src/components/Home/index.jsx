import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { TextInput } from "../TextInput";
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
    const percentage = 77;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "rgb(245, 245, 245)",
          margin: "0 auto",
          minHeight: "100vh",
        }}
      >
        <div style={{ width: "500px", padding: "50px 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <MagnifyIcon
              width="24"
              height="24"
              style={{ position: "absolute", left: "0", margin: "auto 18px" }}
            />
            <TextInput
              type="text"
              style={{ paddingLeft: "50px" }}
              placeholder="Search..."
            />
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: "0",
                backgroundColor: "rgba(13, 153, 255, 0.1)",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                margin: "auto 10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <ArrowIcon width="24" height="24" style={{ rotate: "180deg" }} />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px auto",
              height: "50px",
            }}
          >
            <button
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "45%",
                borderRadius: "30px",
                padding: "10px 40px",
                border: "none",
                backgroundColor: " #fff",
                cursor: "pointer",
              }}
            >
              <h3 style={{ fontWeight: "bold" }}>Sort</h3>
              <Chevron />
            </button>
            <button
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "45%",
                borderRadius: "30px",
                padding: "10px 40px",
                border: "none",
                backgroundColor: " #fff",
                cursor: "pointer",
              }}
            >
              <h3 style={{ fontWeight: "bold" }}>Filter</h3>
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
                      backgroundColor: "rgba(50, 205, 50,.8)",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                    }}
                  ></div>
                  <h3 style={{ fontWeight: "bold", margin: "5px" }}>
                    Prepare for job interview ||||||||||||||||||||||||||||||...
                  </h3>
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
                      margin: "auto 20px",
                      cursor: "pointer",
                      backgroundColor: "rgba(13, 153, 255, 0.1)",
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
                    <h4 style={{ margin: "auto 5px" }}>
                      Due Date: Tomorrow, 9:00 AM
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
                    <h4 style={{ margin: "auto 5px" }}>
                      Priority: High (8/10)
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
                      <DirectionalIcon
                        style={{ width: "20px", height: "20px" }}
                      />
                    </div>
                    <h4 style={{ margin: "auto 5px" }}>
                      Complexity: Moderate (5/10)
                    </h4>
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
                      <li
                        style={{
                          backgroundColor: "rgba(50, 205, 50,.5)",
                          padding: "6px 8px",
                          borderRadius: "15px",
                          marginRight: "5px",
                        }}
                      >
                        <h5>tag1</h5>
                      </li>
                      <li
                        style={{
                          backgroundColor: "rgba(50, 205, 50,.5)",
                          padding: "6px 8px",
                          borderRadius: "15px",
                          marginRight: "5px",
                        }}
                      >
                        <h5>tag2</h5>
                      </li>
                      <li
                        style={{
                          backgroundColor: "rgba(50, 205, 50,.5)",
                          padding: "6px 8px",
                          borderRadius: "15px",
                          marginRight: "5px",
                        }}
                      >
                        <h5>tag3</h5>
                      </li>
                    </ul>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ width: "44px", height: "44px" }}>
                    <CircularProgressbar
                      styles={{
                        text: {
                          fontSize: "50px",
                        },
                      }}
                      // styles={buildStyles({
                      //   pathColor: `rgba(50, 205, 50, ${percentage / 100})`,
                      //   // textColor: "rgba(50, 205, 50)",
                      //   trailColor: "#D1E2FE",
                      // })}
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "20px" }}>
            <ButtonWide text="Add New Task" icon="plus" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
