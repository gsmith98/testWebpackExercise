import React from 'react';

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

export default InputLine;
