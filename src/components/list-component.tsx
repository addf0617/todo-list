import React, { Component } from "react";

type ListComponentProps = {
  name: string;
  date: number;
  completed: boolean;
};

class ListComponent extends Component<ListComponentProps> {
  render() {
    const { name, date, completed } = this.props;
    console.log(name, date, completed);

    return (
      <div className="list">
        <input type="checkbox" name="completed" id="completed" />
        <div className="info">
          <p>{name}</p>
          <p>{date}</p>
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
