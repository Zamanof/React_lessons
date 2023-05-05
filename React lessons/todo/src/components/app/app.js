import React, {Component} from "react";
import AppHeader from "../app-header/app-header"
import TodoList from "../todo-list/todo-list";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter";

import "./app.css"
import ItemAddForm from "../../item-add-form";
class App  extends Component{
    idSeed = 0
    state = {
        todoData:
            [
                this.createTodoItem('Wake up'),
                this.createTodoItem('Have breakfast'),
                this.createTodoItem('Make STEP IT HW\'s')
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

    createTodoItem(text){
        return {
            text,
            important:false,
            done: false,
            id: ++this.idSeed
        }
    }
    addItem = (text)=>{

        this.setState(({todoData})=>{

                const newArray = [
                    ...todoData,
                    this.createTodoItem(text)
                ]
                return{
                    todoData: newArray
                }
            }
        )
    }

    toggleProperty(arr, id, propName){
        const idx = arr.findIndex((el)=> el.id === id);
        const oldItem = arr[idx]
        const newItem = {...oldItem, [propName]: !oldItem[propName]}
        return[
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx+1)
        ]
    }
    onToggleImportant = (id)=>{
        this.setState(({todoData})=>{
            return{
                todoData: this.toggleProperty(todoData, id, "important")
            }
        })
    }
    onToggleDone = (id)=>{
        this.setState(({todoData})=>{
            return{
                todoData: this.toggleProperty(todoData, id, "done")
            }
        })
    }
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
                    onToggleImportant = {this.onToggleImportant}
                    onToggleDone = {this.onToggleDone}
                />
                <ItemAddForm
                    onAdded={this.addItem}/>
            </div>
        );
    }


}

export default App