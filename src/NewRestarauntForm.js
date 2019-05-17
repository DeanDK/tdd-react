import React, { Component } from 'react';
import { Button, TextInput } from 'react-materialize';

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
    const { inputText } = this.state;
    return (
      <div>
        <TextInput
          label="Restaraunt Name"
          data-test="newRestaurantName"
          onChange={this.handleTextChange}
          value={inputText}
        />
        <Button
          data-test="saveNewRestaurantButton"
          onClick={this.handleSave}
        >
        Save</Button>
      </div>
    );
  }
}
