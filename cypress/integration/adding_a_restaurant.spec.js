describe('adding a restaraunt', () => {
  it('displays the restaraunt in the list', () => {
    const restarauntName = 'Sushi Place';
    // visit the page
    cy.visit('http://localhost:1234');

    // click on the add button
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    // enter the name of the restaraunt
    cy.get('[data-test="newRestaurantName"]')
      .type(restarauntName);

    // click on the save button
    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    // check if restaraunt has been added to the page
    cy.contains(restarauntName);
  });
});
