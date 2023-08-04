describe('User can filter parks by activity', () => {
  it.skip('should display parks that have rockclimbing', () => {

    const parksFixture = 'parks.json';

    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      fixture: parksFixture
    }).as('getParks');

    cy.visit('http://localhost:3000/');
    cy.wait('@getParks').its('response.statusCode').should('eq', 200);

    cy.get('.dropdown').select('astronomy');

    cy.get('.cards').children().should('have.length', 4);
    cy.get('.cards').children().first().find('h2').should('have.text', 'Appalachian National Scenic Trail')
    cy.get('.cards').children().first().find('.activities').should('have.text', 'Astronomy | Stargazing | Camping | see more...')
    cy.get('.cards').children().first().find('img').should('exist')

  })
  it.skip('should display a message when the user selects an activity that is not available at any park', () => {

    const parksFixture = 'parks.json';
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      fixture: parksFixture
    }).as('getParks');

    cy.visit('http://localhost:3000/');
    cy.wait('@getParks').its('response.statusCode').should('eq', 200);

    cy.get('.dropdown').select('horse camping');

    cy.get('p').should('have.text', 'there are no parks matching this activity, try looking for a different activity')
  })
});