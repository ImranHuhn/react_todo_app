import React from "react";

class RadioButtons extends React.Component {
  state = {
    value: 0,
    isChecked: false,
  };

  handleChange = (e) => {
    const value = parseInt(e.target.value);
    this.setState({
      value,
      isChecked: !this.state.isChecked,
    });
    this.props.getNumber(value);
  };

  render() {
    return (
      <div
        className="add__radio"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "60px",
          marginBottom: "35px",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>
          Select {this.props.inputType} Level
        </h2>
        <label htmlFor={this.props.inputType}>
          <div
            className="add__radio-list"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "470px",
            }}
          >
            {[...Array(10)].map((e, i) => (
              <div
                className="add__radio-item"
                style={{ position: "relative" }}
                key={crypto.randomUUID()}
              >
                <input
                  onChange={this.handleChange}
                  checked={this.state.value === i + 1 ? "checked" : ""}
                  className="radio-input"
                  style={{
                    position: "absolute",
                    zIndex: "1",
                    opacity: "0",
                    width: "30px",
                    height: "30px",
                    transform: "translate(-15%, -15%)",
                    cursor: "pointer",
                  }}
                  name={this.props.inputType}
                  type="radio"
                  value={i + 1}
                />
                <div
                  className="radio-text"
                  style={{
                    position: "absolute",
                    zIndex: "0",
                    borderRadius: "100%",
                    width: "30px",
                    height: "30px",
                    textAlign: "center"
                  }}
                >
                  <h3
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {i + 1}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </label>
      </div>
    );
  }
}

export default RadioButtons;
