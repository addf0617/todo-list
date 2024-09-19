import React, { Component } from "react";

class ListComponent extends Component {
  render() {
    return (
      <div className="list">
        <input type="checkbox" name="completed" id="completed" />
        <div className="info">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="list-button-group">
          <button>D</button>
          <button>E</button>
        </div>
      </div>
    );
  }
}

export default ListComponent;
