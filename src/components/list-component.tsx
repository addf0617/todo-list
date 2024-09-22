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
            {completed && <del>{name}</del>}
            {!completed && <p>{name}</p>}
            <p>{date}</p>
          </div>
          <div className="list-button-group">
            {/*這裡要把type設定成button，不然會觸發submit，導致表單重置，或者也可以取消提交事件*/}
            <button type="button" onClick={deleteButtonClickHandler}>
              <i className="fa-solid fa-trash"></i>
            </button>
            <button type="button" onClick={editButtonClickHandler}>
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ListComponent;
