import React from "react";
import { render } from "react-dom";
import { Display, Colon } from "seven-segment-display";
import moment from "moment";
import style from "./index.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { time: moment() };

    setInterval(() => {
      this.setState({ time: moment() });
    }, 1000);
  }

  render() {
    return (
      <div>
        <div style={{ width: "100px", display: "inline-block" }}>
          <Display value={this.state.time.hour()} digitCount={2} />
        </div>
        <div style={{ width: "50px", display: "inline-block" }}>
          <Colon on={this.state.time.second() % 2} />
        </div>
        <div style={{ width: "100px", display: "inline-block" }}>
          <Display
            value={this.state.time.minute().toString().padStart(2, "0")}
            digitCount={2}
          />
        </div>
        <div style={{ width: "50px", display: "inline-block" }}>
          <Colon on={this.state.time.second() % 2} />
        </div>
        <div style={{ width: "100px", display: "inline-block" }}>
          <Display
            value={this.state.time.second().toString().padStart(2, "0")}
            digitCount={2}
          />
        </div>
      </div>
    );
  }
}

render(<Clock />, document.getElementById("root"));
