import React from "react";
import "./App.css";
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }

    state = {
        tasks: [
            { title: "ReactJS", isDone: false, priority: "low" },
            { title: "CSS", isDone: true, priority: "medium" },
            { title: "JS", isDone: false, priority: "high" },
            { title: "jQuery", isDone: true, priority: "medium" },
            { title: "Patterns", isDone: false, priority: "high" },
            { title: "Java", isDone: true, priority: "low" },
        ],
        filterValue: "All",
    };

    onAddTaskClick = () => {
        let newTitle = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value ="";
        let newTask = { title: newTitle, isDone: false, priority: "low" };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({ tasks: newTasks });
    };

    changeFilter = (newFilterValue) => {
        this.setState({ filterValue: newFilterValue})
    };

    render = () => {
        return (
            <div className="App">
                <div className="todoList">


                    <div className="todoList-header">
                        <h3 className="todoList-header__title">
                            What to Learn
                        </h3>
                        <div className="todoList-newTaskForm">
                            <input type="text" placeholder="New task name" ref={this.newTaskTitleRef} />
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>


                    {/* <TodoListHeader /> */}
                    <TodoListTasks tasks={this.state.tasks} />
                    <TodoListFooter 
                    filterValue={this.state.filterValue}
                    changeFilter={this.changeFilter} />
                </div>
            </div>
        );
    };
}

export default App;
