describe('User can view all parks', () => {
  it('should dipslay all parks', () => {
    cy.visit('https://example.cypress.io')
    //stub fetch request for all parks
    //stub fetch request for the specific park
    //visit site
    //click on the first card
    //check that all of the following is visible on the page
      //park name
      //park state(s)
      //park summary
      //park activities list
      //link to the parks site
      //designation
      //directions
      //images - check that the number we expect to be there is visible
  })
  it('should display an error message if a 400 level error occurs', () => {
    cy.visit('https://example.cypress.io')
    //stub fetch request for all parks
    //stub fetch request for the specific park with 400 level error
    //visit the site
    //click on the first card
    //assert that an error message is displayed
  })
  it('should display an error message if a 500 level error occurspasses', () => {
    cy.visit('https://example.cypress.io')
    //stub fetch request for all parks
    //stub fetch request for the specific park with 400 level error
    //visit the site
    //click on the first card
    //assert that an error message is displayed
  })
})
