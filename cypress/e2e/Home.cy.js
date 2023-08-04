describe('User can view all parks', () => {
  it('should dipslay all parks', () => {
    const parksFixture = 'parks.json';
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      fixture: parksFixture
    }).as('getParks');

    cy.visit('http://localhost:3000/');
    cy.wait('@getParks').its('response.statusCode').should('eq', 200);

    cy.url().should('eq', 'http://localhost:3000/')

    cy.get('.form-box').should('be.visible')

    cy.get('.cards').children().should('have.length', 10);
    cy.get('.cards').children().first().find('h2').should('have.text', 'Antietam National Battlefield')
    cy.get('.cards').children().first().find('.activities').should('have.text', 'Biking | Road Biking | Camping | see more...')
    cy.get('.cards').children().first().find('img').should('exist')
  })
  it('should display an error message if a 500 level error occurs', () => {
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      body: 'Internal Server Error',
      statusCode: 500
    }).as('getParks');

    cy.visit('http://localhost:3000/');
    cy.wait('@getParks').its('response.statusCode').should('eq', 500);

    cy.get('.error').should('be.visible').children().last().should('have.text', 'something went wrong on our end, please try again later');
  })
})