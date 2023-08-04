describe('User can view all parks', () => {
  it.skip('should dipslay all parks', () => {
    //stub the fetch call
    const parksFixture = 'parks.json'; 
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', { fixture: parksFixture
    }).as('getParks');

    //visit the home page
    cy.visit('http://localhost:3000/');
    cy.wait('@getParks').its('response.statusCode').should('eq', 200);

    //check that the form is visible to the user
    cy.get('.form-box').should('be.visible')

    //check length of array of cards is what is expected
    cy.get('.cards').children().should('have.length', 10);

    //check that the first card has an image, name, and list of expected activities
    cy.get('.cards').children().first().find('h2').should('have.text', 'Antietam National Battlefield')
    cy.get('.cards').children().first().find('.activities').should('have.text', 'Biking | Road Biking | Camping | see more...')
    cy.get('.cards').children().first().find('img').should('exist')
  })
  it('should display an error message if a 500 level error occurs', () => {
    //stub the fetch call
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', { 
      body: 'Internal Server Error',
      statusCode: 500
    }).as('getParks');
    //visit the home page
    cy.visit('http://localhost:3000/');
    cy.wait('@getParks').its('response.statusCode').should('eq', 500);

    //assert that an error message is displayed
    cy.get('.error').should('be.visible')

  })
})