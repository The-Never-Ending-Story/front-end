describe('World Browser spec', () => {
  it('should display list of worlds for the user to be able to view', () => {
    cy.intercept('https://hyperloom-d209dae18b26.herokuapp.com/worlds?format=json', {
    statusCode: 200,
    fixture: 'data'
  })
  cy.visit('http://localhost:3000/worlds')
    .get('.world-browser-container')
    .get('.world-card-container')
    .get('.world-image')
    .get('.world-name')
    .get('.world-preview')
  });
});