describe('User can filter parks by activity', () => {
  it('should display parks that have rockclimbing', () => {

    const parksFixture = 'parks.json'; 
    //stub the fetch call
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', { fixture: parksFixture
    }).as('getParks');
    //visit the home page
    cy.visit('http://localhost:3000/')
    cy.wait('@getParks').its('response.statusCode').should('eq', 200);
    cy.get('p').should('not.contain', 'loading ...');

    //find the form and select rock climbing as an activity
    // cy.get('h1')
    //assert that the home page has the right number of cards
    //assert that the name on the first and last card is what we expect
  })
  it.skip('should display a message when the user selects an activity that is not available at any park', () => {
    //stub the fetch call
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      body: parks
    });
    //visit the home page
    cy.visit('http://localhost:3000/')
      //find the form and select horse camping as an activity
      //assert that the error message is displayed
  })
})