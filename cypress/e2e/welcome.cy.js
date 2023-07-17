describe('Welcome Page', () => {
  beforeEach(()=> {
    cy.intercept('https://hyperloom-d209dae18b26.herokuapp.com/worlds?format=json', {
      statusCode: 200,
      fixture: 'data'
    }).visit('http://localhost:3000')
  })
  
  it('should display correct initial text', () => {
    cy.get('.initial-text').should('have.text', 'Introducing HyperLoom');
  });

  it('should display header with the logo upon initial load', ()=> {
    cy.get('.header-container').should('be.visible').should('exist')

    cy.get('.header-logo').should('be.visible').should('exist')
  })

  it('should display correct intro text', () => {
    cy.get('.intro-text').should(
      'have.text',
      'HyperLoom uses the power of MidJourney and ChatGPT to create new and exciting worlds, complete with rich lore. Explore barely known worlds, or discover new domains:'
    );
  });

  it('should navigate to correct URLs when links are clicked', () => {
    cy.get('.menu-button').first().click();
    cy.url().should('include', '/worlds');

    cy.go('back');

    cy.contains('Create').click();
    cy.url().should('include', '/world/');
  });

  it('should contain the button container', () => {
    cy.get('.button-container').should('exist');
  });
});
