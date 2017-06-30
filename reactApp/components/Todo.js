import React from 'react';

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

export default Todo;
