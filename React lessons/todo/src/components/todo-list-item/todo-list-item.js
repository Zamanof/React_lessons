import React from "react";

import "./todo-list-item.css"

class TodoListItem extends React.Component {
    // state = {
    //     done: false,
    //     important: false
    // }
    // onLabelClick = () => {
    //     // console.log(`Done ${this.props.text}`)
    //     this.setState(({done}) => {
    //         return {
    //             done: !done
    //         }
    //     })
    // }
    //
    // onMarkImportant = () => {
    //     this.setState(({important}) => {
    //         return {
    //             important: !important
    //         }
    //     })
    // }

    render() {
        const {
            text,
            onDeleted,
            onToggleImportant,
            onToggleDone,
            important,
            done
        } = this.props
        let classNames = "todo-list-item"
        let btnBgColor = 'btn btn-outline-success btn-sm float-right'
        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
            btnBgColor += ' bg-green'
        }
        return (
            <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={onToggleDone}
            >
                {text}
            </span>
            <button type="button"
                    className={btnBgColor}
                    onClick={onToggleImportant}>
                <i className="fa fa-exclamation"/>
            </button>
            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right "
                    onClick={onDeleted}
            >
            <i className="fa fa-trash-o"/>
        </button>
        </span>)
    }
}


// const TodoListItem = ({text, important = false}) => {
//     // const itemStyle = {
//     //     // color: important ? "red" : "black"
//     // }
//     return (
//         <span className="todo-list-item">
//             <span
//                 // style={itemStyle}
//                   className="todo-list-item-label">
//                 {text}
//             </span>
//             <button type="button"
//                 className="btn btn-outline-success btn-sm float-right">
//                 <i className="fa fa-exclamation"/>
//             </button>
//             <button type="button"
//                    className="btn btn-outline-danger btn-sm float-right">
//             <i className="fa fa-trash-o"/>
//         </button>
//         </span>)
//
// }
export default TodoListItem