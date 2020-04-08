import React from "react";
import TodoListTask from './TodoListTask';

class TodoListTasks extends React.Component {
    render = () => {

        let tasksElements = this.props.tasks.map( task => {
            return <TodoListTask title={task.title} isDone={task.isDone} priority={task.priority} />
        });

        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    };
}

export default TodoListTasks;
