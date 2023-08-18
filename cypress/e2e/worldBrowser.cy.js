describe('World Browser spec', () => {
  beforeEach( ()=> {
    cy.intercept('https://hyperloom-d209dae18b26.herokuapp.com/worlds?format=json', {
    statusCode: 200,
    fixture: 'data'
    }).intercept('https://hyperloom-d209dae18b26.herokuapp.com/worlds/60?format=json', {
      statusCode: 200,
      fixture: 'single-data'
    })
    .visit('http://localhost:3000/worlds')
  })

  it('should display list of worlds for the user to be able to view', () => {
    cy.get('.loader-wrapper')
      .get('.world-browser-container')
      .get('.carousel-preview-display')
      .get('.grid-preview-display')
  });

  it('should have main previews', () => {
    cy.get('.main-preview-container')
      .get('.main-preview-name').eq(0).should('have.text', "Elysium's Reverie")
      .get('.main-preview-blurb').eq(0).should('have.text', "A hauntingly beautiful, yet mystifyingly uncanny world where gentle streams of magic weave through sturdy gears of technology")
    cy.get('.main-next').click()

    cy.get('.main-preview-container')
      .get('.main-preview-name').eq(0).should('have.text', "Nexus Astralis")
      .get('.main-preview-blurb').eq(0).should('have.text', "A world of mystic energies, advanced machinery, and shifting dimensions")
    cy.get('.main-next').click()

    cy.get('.main-preview-name').eq(0).click()

    cy.get('h2').should('have.text', "DigiVale"); 


  })

  it('should have carousel previews', () => {
    cy.get('.carousel').eq(0)
      .get('.carousel-preview-container')
      .get('.carousel-item')
  })


  it('should have grid previews', () => {
    cy.get('.grid-preview-wrapper')
      .get('.grid-preview-container')
      .get('.grid-preview-image')
      .get('.grid-preview-modal')
  })


});