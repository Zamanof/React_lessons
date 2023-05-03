import AppHeader from "../app-header/app-header"
import TodoList from "../todo-list/todo-list";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter";

import "./app.css"
const App = () => {

    let id = 0
    const todoData=
    [
        {text: 'Wake up', important: false, id:++id},
        {text: 'Have breakfast', important: false, id:++id},
        {text: 'Make STEP IT HW\'s', important: true, id:++id},

    ]
    return (
        <div className='todo-app'>
            <AppHeader todo={1} done={2}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </div>
    );
}

export default App