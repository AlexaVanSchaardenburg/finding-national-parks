describe('User can view all parks', () => {
  it('should dipslay all parks', () => {
    cy.visit('https://example.cypress.io')
    //stub fetch request for all parks
    //visit site
    //check length of array of cards is what is expected
    //check that the first card has an image, name, and list of expected activities
  })
  it('should display an error message if a 400 level error occurs', () => {
    cy.visit('https://example.cypress.io')
    //stub fetch request for all parks with 400 level error
    //visit the site
    //assert that an error message is displayed
  })
  it('should display an error message if a 500 level error occurspasses', () => {
    cy.visit('https://example.cypress.io')
      //stub fetch request for all parks with 500 level error
      //visit the site
      //assert that an error message is displayed
  })
})

//testing that everything we expect to dipslay does
//testing sad path of 500
//testing sad path 400