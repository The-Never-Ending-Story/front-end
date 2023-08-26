describe('Welcome Page', () => {
  beforeEach(()=> {
    cy.intercept('https://hyperloom-d209dae18b26.herokuapp.com/worlds?format=json', {
      statusCode: 200,
      fixture: 'data'
    }).intercept('https://hyperloom-d209dae18b26.herokuapp.com/worlds/3?format=json', {
      statusCode: 200,
      fixture: 'single-data'
    })
    .intercept('https://hyperloom-d209dae18b26.herokuapp.com/worlds/discover?format=json', {
      statusCode: 200,
      fixture: 'single-data'
    })
    .visit('http://localhost:3000/')
  })
  
  it('should display the Hero Slider and Text', () => {
    cy.get('.welcome-page')
      .get('.slider-container')
      .get('.slider-div')

    cy.get('.intro-box')
      .get('.intro-text')
      .get('.introducing').should('have.text', 'INTRODUCING')
      .get('.hero-title').should('have.text', 'HYPERLOOM')

    cy.get('.keyframe-arrow')
    cy.get('.tag-text').should('have.text', 'Powered by ChatGPT and MidJourney AI')
  })

  it('should have about section', ()=> {
    cy.get('.about').should('be.visible').should('exist')
      .get('.about-title').should('have.text', 'About')
      .get('.about-text').should('have.text', "HyperLoom is world building application that allows users to explore magical realms. It uses the power of MidJourney and ChatGPT to create new and exciting worlds, complete with rich lore. Explore barely known worlds, or discover new domains:")
      .get('.button-container')
  })

  it('should contain the footer component and list contributors', () => {
    cy.get('.footer-container').should('exist')
      .get('.team-container')
    
    cy.get('.dev-container').eq(0).find('a[href="https://www.linkedin.com/in/adam-meza/"]');
    cy.get('.dev-container').eq(1).find('a[href="https://www.linkedin.com/in/shanemisra/"]');
    cy.get('.dev-container').eq(2).find('a[href="https://www.linkedin.com/in/priscilla-paxton/"]');
    cy.get('.dev-container').eq(3).find('a[href="https://www.linkedin.com/in/sharie-trachsel/"]');
    cy.get('.dev-container').eq(4).find('a[href="https://www.linkedin.com/in/andrew-b0wman/"]');
    cy.get('.dev-container').eq(5).find('a[href="https://www.linkedin.com/in/sean-cowans/"]');
    cy.get('.dev-container').eq(6).find('a[href="https://www.linkedin.com/in/brandenge/"]');
  });
});
