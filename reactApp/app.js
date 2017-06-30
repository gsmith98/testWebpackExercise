import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ['Come to SF', 'Master React', 'Sleep'];

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {dummyData.map(task => <Todo task={task} />)}
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
      <li><button>X</button> {this.props.task}</li>
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
  }

  render() {
    return (
      <div>
        <InputLine />
        <TodoList />
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
