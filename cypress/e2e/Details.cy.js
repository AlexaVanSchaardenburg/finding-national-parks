describe('User can view all parks', () => {
  it.skip('should dipslay all parks', () => {
    const parksFixture = 'parks.json';
    const parkFixture = 'park.json';

    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      fixture: parksFixture
    }).as('getParks');

    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=arch&limit=1&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      fixture: parkFixture
    }).as('getPark');

    cy.visit('http://localhost:3000/');
    cy.wait('@getParks').its('response.statusCode').should('eq', 200);
    cy.get('.cards').find(':nth-child(5)').click();
    cy.wait('@getPark').its('response.statusCode').should('eq', 200);

    cy.url().should('eq', 'http://localhost:3000/arch')

    cy.get('.park-summary-box').children().first().children().first().should('have.text', 'Arches National Park')
    cy.get('.home-button').should('have.text', 'view other parks')
    cy.get('.park-summary-box > :nth-child(2)').should('have.text', 'UT')
    cy.get('.park-summary-box > :nth-child(3)').should('have.text', 'Discover a landscape of contrasting colors, land forms, and textures unlike any other. The park has over 2,000 natural stone arches, hundreds of soaring pinnacles, massive rock fins, and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.')
    cy.get('#activities').children().should('have.length', 19)
    cy.get('.location-designation-link > a').should('have.text', 'click here to go to park site!')
    cy.get('.location-designation-link > :nth-child(2)').should('have.text', 'designationNational Park')
    cy.get('.location-designation-link > :nth-child(3)').should('have.text', 'locationArches National Park is located in southeast Utah, five miles north of Moab on US 191. From Moab, Utah, drive five miles north on Main Street/US 191. Turn right at the stoplight. From Interstate 70, take exit 182 (Crescent Junction), then drive south 28 miles on US 191. Turn left at the stoplight.')
    cy.get('[src="https://www.nps.gov/common/uploads/structured_data/473F5463-F0D2-261D-CEF5FCB39363590B.jpg"]').should('be.visible')
  });
  it.skip('should allow the user to return to the page with all parks', () => {
    const parksFixture = 'parks.json';
    const parkFixture = 'park.json';

    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      fixture: parksFixture
    }).as('getParks');

    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=arch&limit=1&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      fixture: parkFixture
    }).as('getPark');

    cy.visit('http://localhost:3000/');
    cy.wait('@getParks').its('response.statusCode').should('eq', 200);

    cy.get('.cards').find(':nth-child(5)').click();
    cy.wait('@getPark').its('response.statusCode').should('eq', 200);

    cy.get('.home-button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
  it('should display an error message if a 500 level error occurspasses', () => {

    const parksFixture = 'parks.json';

    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      fixture: parksFixture
    }).as('getParks');

    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=arch&limit=1&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      body: 'Internal Server Error',
      statusCode: 500
    }).as('getPark');

    cy.visit('http://localhost:3000/');
    cy.wait('@getParks').its('response.statusCode').should('eq', 200);

    cy.get('.cards').find(':nth-child(5)').click();
    cy.wait('@getPark').its('response.statusCode').should('eq', 500);

    cy.get('.error').should('be.visible').children().last().should('have.text', 'something went wrong on our end, please try again later');
  })
})
