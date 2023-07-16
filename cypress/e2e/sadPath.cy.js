describe('Sad Path Spec', () => {

  beforeEach(() => {
    cy.intercept('https://hyperloom-d209dae18b26.herokuapp.com/worlds?format=json', {
    statusCode: 200,
    fixture: 'data'
    })
  })

  it('should render the page not found component in world browser if  an incorrect url is typed', () => {
    cy.visit('http://localhost:3000/worldss')
    cy.get('.not-found')
    cy.contains('Lost your way?')
    cy.contains('Sorry, we can\'t find this page. You\'ll find worlds to discover and explore back home.')
      .get('.not-found-home')
  })

  it('should render the page not found component in single world view if an incorrect url is typed', () => {
  cy.visit('http://localhost:3000/worldd/2')
  cy.get('.not-found')
  cy.contains('Lost your way?')
  cy.contains('Sorry, we can\'t find this page. You\'ll find worlds to discover and explore back home.')
    .get('.not-found-home')
  })

  it('should render the error component in world browser if there is an issue with the server', () => {
    cy.intercept('https://hyperloom-d209dae18b26.herokuapp.com/worlds?format=json', {
      statusCode: 500,
      body: {}
    })
    cy.visit('http://localhost:3000/worlds')
    cy.get('.not-found-wrapper')
    cy.contains('Something Went Wrong')
    cy.contains('HyperLoom is currently experiencing issues.')
      .get('.not-found-home')
    })
  
    it('should render the page not found component if an invalid id is given', () => {
      cy.intercept('https://hyperloom-d209dae18b26.herokuapp.com/worlds/3000?format=json', {
        statusCode: 404,
        body: {}
      })
      cy.visit('http://localhost:3000/world/3000')
      cy.get('.not-found')
      cy.contains('Lost your way?')
      cy.contains('Sorry, we can\'t find this page. You\'ll find worlds to discover and explore back home.')
        .get('.not-found-home')
      })
}) 