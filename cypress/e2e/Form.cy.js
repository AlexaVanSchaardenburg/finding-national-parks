describe('User can filter parks by activity', () => {
  it('should display parks that have rockclimbing', () => {
    cy.visit('https://example.cypress.io')
    //visit the home page
    //find the form and select rock climbing as an activity
    //assert that the home page has the right number of cards
    //assert that the name on the first and last card is what we expect
  })
  it('should display a message when the user selects an activity that is not available at any park', () => {
    cy.visit('https://example.cypress.io')
      //visit the home page
      //find the form and select horse camping as an activity
      //assert that the error message is displayed
  })
})