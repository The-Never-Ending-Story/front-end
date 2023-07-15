describe('Welcome Page', () => {
  beforeEach(()=> {
    cy.intercept('https://hyperloom-d209dae18b26.herokuapp.com/worlds?format=json', {
      statusCode: 200,
      fixture: data
    })
  }).visit('http://localhost:3000')
})
  it('', () => {
    cy
})