import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Headers from "./layout/Headers";
import DashBoard from "./task/DashBoard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Headers/>
        <DashBoard/>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));