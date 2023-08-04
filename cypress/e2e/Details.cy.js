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

    //check that all of the following is visible on the page
    //park name
    cy.get('.park-summary-box').children().first().children().first().should('have.text', 'Arches National Park')
    cy.get('.home-button').should('have.text', 'view other parks')
    //park state(s)
    cy.get('.park-summary-box > :nth-child(2)').should('have.text', 'UT')
    //park summary
    cy.get('.park-summary-box > :nth-child(3)').should('have.text', 'Discover a landscape of contrasting colors, land forms, and textures unlike any other. The park has over 2,000 natural stone arches, hundreds of soaring pinnacles, massive rock fins, and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.')
    //park activities list
    cy.get('#activities').children().should('have.length', 19)
    //link to the parks site
    cy.get('.location-designation-link > a').should('have.text', 'click here to go to park site!')
    //designation
    cy.get('.location-designation-link > :nth-child(2)').should('have.text', 'designationNational Park')
    //directions
    cy.get('.location-designation-link > :nth-child(3)').should('have.text', 'locationArches National Park is located in southeast Utah, five miles north of Moab on US 191. From Moab, Utah, drive five miles north on Main Street/US 191. Turn right at the stoplight. From Interstate 70, take exit 182 (Crescent Junction), then drive south 28 miles on US 191. Turn left at the stoplight.')
    //images - check that the number we expect to be there is visible
    cy.get('[src="https://www.nps.gov/common/uploads/structured_data/473F5463-F0D2-261D-CEF5FCB39363590B.jpg"]').should('be.visible')
  });
  it('should allow the user to return to the page with all parks', () => {
    const parksFixture = 'parks.json';
    const parkFixture = 'park.json';
    //stub fetch request for all parks
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      fixture: parksFixture
    }).as('getParks');

    //stub fetch request for the specific park
    cy.intercept('GET', 'https://developer.nps.gov/api/v1/parks?parkCode=arch&limit=1&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX', {
      fixture: parkFixture
    }).as('getPark');

    //visit site
    cy.visit('http://localhost:3000/');
    cy.wait('@getParks').its('response.statusCode').should('eq', 200);

    //click on the first card
    cy.get('.cards').find(':nth-child(5)').click();
    cy.wait('@getPark').its('response.statusCode').should('eq', 200);
    //stub fetch request for the specific park with 400 level error
    //visit the site
    //click on the first card
    //assert that an error message is displayed
  })
  it.skip('should display an error message if a 500 level error occurspasses', () => {
    cy.visit('https://example.cypress.io')
    //stub fetch request for all parks
    //stub fetch request for the specific park with 400 level error
    //visit the site
    //click on the first card
    //assert that an error message is displayed
  })
})
