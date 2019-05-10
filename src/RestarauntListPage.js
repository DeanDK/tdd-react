import React, { Component } from 'react';
import NewRestarauntForm from './NewRestarauntForm';
import RestaurantList from './RestarauntList';

export default class RestarauntListPage extends Component {
  state = { restarauntNames: [] }

  handleAddRestaurant = (newRestaurantName) => {
    this.setState(state => ({
      restarauntNames: [
        newRestaurantName,
        ...state.restarauntNames,
      ],
    }));
  }

  render() {
    const { restarauntNames } = this.state;
    return (
      <div>
        <button data-test="addRestaurantButton">
          Add Restaraunt
        </button>
        <NewRestarauntForm
          onSave={this.handleAddRestaurant}
        />
        <RestaurantList restaraunts={restarauntNames} />
      </div>
    );
  }
}
