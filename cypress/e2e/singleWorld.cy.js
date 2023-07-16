describe('template spec', () => {
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
    .contains('Discover').click();
  })
  
  it('should display the main details of a world', () => {
    cy.get('.single-top-wrapper').should('exist');

    cy.get('.world-img')
      .should('have.attr', 'src')
      .and('include', 'your-image-src'); // Replace 'your-image-src' with the expected image src

    cy.get('h1').should('have.text', ''); // Fill in the expected text for the world name

    cy.get('.single-geo').should('exist');
    cy.get('.single-mag-tech').should('exist');
    cy.get('.single-mag-tech').should('exist');
    cy.get('.single-top-wrapper p').should('exist');
  });

  it('should display the inhabitants tab and check its elements', () => {
    cy.contains('Inhabitants').click();

    // Example assertion for the Inhabitant component's image src
    cy.get('.single-det-wrapper .inhabitant-img')
      .should('have.attr', 'src')
      .and('include', 'your-image-src'); // Replace 'your-image-src' with the expected image src

    cy.get('.single-det-wrapper .alignment').should('have.text', ''); // Fill in the expected text for the alignment

    cy.get('.single-det-wrapper .politics').should('have.text', ''); // Fill in the expected text for the politics

    // Add assertions for other elements within the inhabitants tab
    // using the same pattern: cy.get(...).should(...);
  });

  it('should display the characters tab and check its elements', () => {
    cy.contains('Characters').click();

    // Example assertion for the Character component's species
    cy.get('.single-det-wrapper .species').should('have.text', ''); // Fill in the expected text for the species

    cy.get('.single-det-wrapper .alignment').should('have.text', ''); // Fill in the expected text for the alignment

    cy.get('.single-det-wrapper .age').should('have.text', ''); // Fill in the expected text for the age

    cy.get('.single-det-wrapper .location').should('have.text', ''); // Fill in the expected text for the location

    // Add assertions for other elements within the characters tab
    // using the same pattern: cy.get(...).should(...);
  });

  it('should display the locations tab and check its elements', () => {
    cy.contains('Locations').click();

    // Example assertion for the Location component's climate
    cy.get('.single-det-wrapper .climate').should('have.text', ''); // Fill in the expected text for the climate

    // Example assertion for the Location component's image src
    cy.get('.single-det-wrapper .location-img')
      .should('have.attr', 'src')
      .and('include', 'your-image-src'); // Replace 'your-image-src' with the expected image src

    // Add assertions for other elements within the locations tab
    // using the same pattern: cy.get(...).should(...);
  });
})