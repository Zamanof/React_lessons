import React, {Component} from "react";
import AppHeader from "../app-header/app-header"
import TodoList from "../todo-list/todo-list";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter";

import "./app.css"
class App  extends Component{
    idSeed = 0
    state = {
        todoData:
            [
                {text: 'Wake up', important: false, id:++this.idSeed},
                {text: 'Have breakfast', important: false, id:++this.idSeed},
                {text: 'Make STEP IT HW\'s', important: true, id:++this.idSeed}
            ]
    }
 deleteItem = (id)=>{
    this.setState(({todoData})=>{
        const idx = todoData.findIndex((el)=> el.id === id);
        const newArray = [
            ...todoData.slice(0, idx),
            ...todoData.slice(idx+1)
        ]
        return{
            todoData: newArray
        }
        }
    )}
    render() {
        return (
            <div className='todo-app'>
                <AppHeader todo={1} done={2}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
            </div>
        );
    }


}

export default App