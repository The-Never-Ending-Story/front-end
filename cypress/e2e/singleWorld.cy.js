describe('Single World View', () => {
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
    .visit('http://localhost:3000/world/3')

  })
  
  it('should display the main details of a world', () => {
    cy.get('.single-top-wrapper').should('exist');

    cy.get('.world-img')
      .should('have.attr', 'src')
      .and('include', "https://cdn.discordapp.com/attachments/1128814452012220536/1129842151103148173/hyperloom_DigiVale_is_a_vivid_blend_of_natural_beauty_magic-inf_44ee86aa-76d6-416b-9526-75abd158ae6b.pn2");

    cy.get('h2').should('have.text', "DigiVale"); 
    cy.get('.single-geo').should('exist');
    cy.get('.attr-name').eq(0).should('have.text', 'Shape ')
    cy.get('.attr-name').eq(1).should('have.text', 'Size ')
    cy.get('.attr-name').eq(2).should('have.text', 'Climate ')
    cy.get('.lvl-name').eq(0).should('have.text', 'MagicLevel 10')
    cy.get('.lvl-detail').eq(0).should('have.text', 'Virtually limitless, advanced enchantments and cosmic wizardry')
    cy.get('.lvl-name').eq(1).should('have.text', 'TechonologyLevel 4')
    cy.get('.lvl-detail').eq(1).should('have.text', 'Basic ai, primitive cybernetics and rudimentary nanotech')
    cy.contains("Planet")
    cy.contains("DigiVale is a vivid blend of natural beauty, magic-infused landscapes, and cyberpunk aesthetics. Shimmering salt flats stretch for miles, dotted with conductive crystals that spin in harmony, enhancing magic for miles. The savanna carries vibrant flora and fauna, pulsating with otherworldly life, while its vast, cavernous caves, crisscrossing underneath, are both mystic and perilous.")

  });

  it('should display the inhabitants tab and check its elements', () => {
    cy.contains('Inhabitants').click();
    cy.get('.single-det-img')
        .should('have.attr', 'src')
              
    // cy.contains('Alignment: Neutral Good')
  });

  it('should display the characters tab and check its elements', () => {
    cy.contains('Characters').click();
    cy.get('.single-det-img').eq(0)
      //   .should('have.attr', 'src')
      //   .and('include', "https://cdn.midjourney.com/4b3c0e4b-9b78-4157-8ebd-888110919fd9/0_0.png")
    
      // cy.contains('Eldriq')
       });

  it('should display the locations tab and check its elements', () => {
    // cy.contains('Locations').click()
    // cy.contains("Climate: Hot, dry")
    // cy.contains("Constructed amid saltpan, emblematically named for the encircling mystical crystals. Foundations are rooted within the caves beneath, buildings are magically reinforced, with abundant neon lighting.")

    // cy.get('.single-det-img')
    //   .should('have.attr', 'src')
    //   .and('include', 'https://cdn.midjourney.com/97131eab-e646-44cd-9ee0-13cd3900ad57/0_0.png'); 
  });
})