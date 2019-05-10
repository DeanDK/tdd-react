import React, { Component } from 'react';
import NewRestarauntForm from './NewRestarauntForm';

export default class RestarauntListPage extends Component {
  render() {
    return (
      <div>
        <button data-test="addRestaurantButton">
          Add Restaraunt
        </button>
        <NewRestarauntForm />
      </div>
    );
  }
}
