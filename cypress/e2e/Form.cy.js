describe('User can filter parks by activity', () => {
  it.skip('should display parks that have rockclimbing', () => {

    //stub the fetch call
    const parksFixture = 'parks.json';
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      fixture: parksFixture
    }).as('getParks');

    //visit the home page
    cy.visit('http://localhost:3000/');
    cy.wait('@getParks').its('response.statusCode').should('eq', 200);

    //find the form and select astronomy as an activity
    cy.get('.dropdown').select('astronomy');

    //assert that the home page has the right number of cards
    cy.get('.cards').children().should('have.length', 4);

    //assert that the name on the first is what we expect
    cy.get('.cards').children().first().find('h2').should('have.text', 'Appalachian National Scenic Trail')
    cy.get('.cards').children().first().find('.activities').should('have.text', 'Astronomy | Stargazing | Camping | see more...')
    cy.get('.cards').children().first().find('img').should('exist')

  })
  it.skip('should display a message when the user selects an activity that is not available at any park', () => {

    //stub the fetch call
    const parksFixture = 'parks.json';
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      fixture: parksFixture
    }).as('getParks');

    //visit the home page
    cy.visit('http://localhost:3000/');
    cy.wait('@getParks').its('response.statusCode').should('eq', 200);

    //find the form and select horse camping as an activity
    cy.get('.dropdown').select('horse camping');

    //assert that the error message is displayed
    cy.get('p').should('have.text', 'there are no parks matching this activity, try looking for a different activity')
  })
});