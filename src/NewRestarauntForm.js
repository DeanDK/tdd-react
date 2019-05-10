import React, { Component } from 'react';

export default class NewRestarauntForm extends Component {
  state = { inputText: '' };

  handleTextChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  handleSave = () => {
    const { inputText } = this.state;
    const { onSave } = this.props;

    onSave(inputText);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          data-test="newRestaurantName"
          onChange={this.handleTextChange}
        />
        <button
          data-test="saveNewRestaurantButton"
          onClick={this.handleSave}
        >
        Save</button>
      </div>
    );
  }
}
