import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [
  { taskText: 'Come to SF', completed: true},
  { taskText: 'Master React', completed: false },
  { taskText: 'Sleep', completed: false }
];

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(task =>
          <Todo task={task.taskText} completed={task.completed} />)}
      </ul>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <button>X</button>
        {this.props.completed ?
          <strike>{this.props.task}</strike> :
          <span>{this.props.task}</span>}
      </li>
    );
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="task" />
        <button type="submit">Add todo</button>
      </div>
    );
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({ todos: dummyData })
  }

  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
