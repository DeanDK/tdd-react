import React, { Component } from 'react';
import { Button } from 'react-materialize';
import NewRestarauntForm from './NewRestarauntForm';
import RestaurantList from './RestarauntList';

export default class RestarauntListPage extends Component {
  state = {
    restarauntNames: [],
    showNewRestarauntForm: false,
  }

  handleShowNewRestarauntForm = () => {
    this.setState({ showNewRestarauntForm: true });
  }

  handleAddRestaurant = (newRestaurantName) => {
    this.setState(state => ({
      showNewRestarauntForm: false,
      restarauntNames: [
        newRestaurantName,
        ...state.restarauntNames,
      ],
    }));
  }

  render() {
    const { restarauntNames, showNewRestarauntForm } = this.state;
    return (
      <div>
        <Button
          data-test="addRestaurantButton"
          onClick={this.handleShowNewRestarauntForm}
        >
          Add Restaraunt
        </Button>
        {
          showNewRestarauntForm
            ? (
              <NewRestarauntForm
                onSave={this.handleAddRestaurant}
              />
            )
            :
            null
        }

        <RestaurantList restaraunts={restarauntNames} />
      </div>
    );
  }
}
