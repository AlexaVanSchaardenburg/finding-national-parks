import { parks } from '../fixtures/parks'

describe('User can filter parks by activity', () => {
  it('should display parks that have rockclimbing', () => {
    //stub the fetch call
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      body: parks
    });
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