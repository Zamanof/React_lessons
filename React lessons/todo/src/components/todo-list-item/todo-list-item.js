import React from "react";

import "./todo-list-item.css"
const TodoListItem = ({text, important = false}) => {
    // const itemStyle = {
    //     // color: important ? "red" : "black"
    // }
    return (
        <span className="todo-list-item">
            <span
                // style={itemStyle}
                  className="todo-list-item-label">
                {text}
            </span>
            <button type="button"
                className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"/>
            </button>
            <button type="button"
                   className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o"/>
        </button>
        </span>)

}
export default TodoListItem