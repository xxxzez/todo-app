import React from "react";
import "./App.css";
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    tasks = [
        {title: 'ReactJS', isDone: false, priority: 'low'},
        {title: 'CSS', isDone: true, priority: 'medium'},
        {title: 'JS', isDone: false, priority: 'high'},
        {title: 'jQuery', isDone: true, priority: 'medium'},
        {title: 'Patterns', isDone: false, priority: 'high'},
        {title: 'Java', isDone: true, priority: 'low'},
    ];
    filterValue = 'All';

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks={this.tasks} />
                    <TodoListFooter filterValue={this.filterValue} />
                </div>
            </div>
        );
    };
}

export default App;
