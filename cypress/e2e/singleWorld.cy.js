describe('template spec', () => {
    beforeEach(()=> {
      cy.intercept('https://hyperloom-d209dae18b26.herokuapp.com/worlds?format=json', {
        statusCode: 200,
        fixture: 'data'
      }).intercept('https://hyperloom-d209dae18b26.herokuapp.com/worlds/discover?format=json', {
        statusCode: 200,
        fixture: 'single-data'
      })
      .visit('http://localhost:3000')
    })
  it('Should be able to view a single world', () => {
    cy.contains('Create').click();
    cy.url().should('include', '/world/3');

    
  })
})