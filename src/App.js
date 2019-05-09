import React from 'react';

export default class App extends React.Component {
  state = { name: 'bar' }

  render() {
    return <div className="hello">{this.state.name}</div>;
  }
}
