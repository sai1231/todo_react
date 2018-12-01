import React, { Component } from "react";

const TodoFooter = props => (
  <React.Fragment>
    <button
      onClick={props.onClickClearComplete}
      className="submit"
      align="right"
    >
      Clear Completed
    </button>
    <button onClick={props.onClickClear} className="submit" align="right">
      Clear All
    </button>

    <p className="sign" align="center">
      Total : {props.totalCount}
    </p>
    <p className="sign" align="center" id="completedCount">
      Completed: {props.completedCount}
    </p>
  </React.Fragment>
);

export default TodoFooter;
