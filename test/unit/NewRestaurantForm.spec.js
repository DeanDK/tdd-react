import React from 'react';
import { mount } from 'enzyme';
import NewRestarauntForm from '../../src/NewRestarauntForm';

describe('NewRestarauntForm', () => {
  describe('clicking the save button', () => {
    it('calls the onSave handler', () => {
      //mock the function
      const saveHandler = jest.fn();

      // mount the virtual component
      const wrapper = mount(<NewRestarauntForm onSave={saveHandler}/>);

      // find input and simulate change event (enter the restaraunt name)
      wrapper
        .find('input[data-test="newRestaurantName"]')
        .simulate('change', { target: { value: 'Sushi place' } });

      // find save button and simulate click event
      wrapper
        .find('button[data-test="saveNewRestaurantButton"]')
        .simulate('click');

      // expect that mock function was called with specific arguments
      expect(saveHandler).toHaveBeenCalledWith('Sushi place');
    });
  });
});
