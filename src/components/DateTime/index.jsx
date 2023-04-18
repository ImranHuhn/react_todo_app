import React from "react";

class DateTime extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
    this.props.getDateTime(e.target.value);
  };
  render() {
    return (
      <div
        className="add__date-time-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "45%",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Select {this.props.title}</h2>
        <label htmlFor={this.props.type}>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            name={this.props.type}
            type={this.props.type}
          />
        </label>
      </div>
    );
  }
}

export default DateTime;
