import React, { Component } from "react";

type ListComponentProps = {
  key: string;
  name: string;
  date: string;
  completed: boolean;
  toggleCompleted: () => void;
  editButtonClickHandler: () => void;
  deleteButtonClickHandler: () => void;
};

class ListComponent extends Component<ListComponentProps> {
  render() {
    let {
      name,
      date,
      completed,
      editButtonClickHandler,
      deleteButtonClickHandler,
    } = this.props;
    return (
      <div className="list">
        <form action="">
          <input
            type="checkbox"
            name="completed"
            id="completed"
            onChange={this.props.toggleCompleted}
            checked={completed}
          />
          <div className="info">
            <p>{name}</p>
            <p>{date}</p>
          </div>
          <div className="list-button-group">
            <button onClick={deleteButtonClickHandler}>D</button>
            <button onClick={editButtonClickHandler}>E</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ListComponent;
