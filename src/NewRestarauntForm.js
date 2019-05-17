import React, { Component } from 'react';
import {
  Button,
  TextInput,
  Row,
} from 'react-materialize';

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
      <Row>
        <TextInput
          s={12}
          m={8}
          l={10}
          label="Restaraunt Name"
          data-test="newRestaurantName"
          onChange={this.handleTextChange}
          value={inputText}
        />
        <Button
          s={12}
          m={4}
          l={2}
          data-test="saveNewRestaurantButton"
          onClick={this.handleSave}
        >
        Save</Button>
      </Row>
    );
  }
}
