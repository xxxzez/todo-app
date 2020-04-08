import React from "react";

class TodoListTask extends React.Component {
    render = () => {
        return (
            <div className="todoList-tasks">
                <input type="checkbox" checked={this.props.isDone} />
                <span>{this.props.title} - {this.props.priority}</span>
            </div>
        );
    };
}

export default TodoListTask;
