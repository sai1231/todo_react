import React, { Component } from "react";

class TodoFooter extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onClickClearComplete}
          className="submit"
          align="right"
        >
          Clear Completed
        </button>
        <button
          onClick={this.props.onClickClear}
          className="submit"
          align="right"
        >
          Clear All
        </button>

        <p className="sign" align="center">
          Total : {this.props.totalCount}
        </p>
        <p className="sign" align="center" id="completedCount">
          Completed: {this.props.completedCount}
        </p>
      </React.Fragment>
    );
  }
}

export default TodoFooter;
