
// https://docs.cypress.io/api/commands/get#Get-in-within

describe('My First Test', function() {
  
  beforeEach(function() {
    
    cy.visit("http://qainterview.pythonanywhere.com/");
  })

  it.skip('Login is successful!', function() {
    cy.get(".margin-base-vertical").should('contain', "The greatest factorial calculator!");
    cy.get("#number").should('be.visible');
    cy.get("#getFactorial").should('be.visible');
    cy.get('a[href="/terms"]').should('be.visible');
    cy.get('a[href="/privacy"]').should('be.visible');
  })

  it('Check Terms and Conditions Link!', function() {
    
    cy.OpenTermsAndConditionsPage();
    //Assertions
    cy.CheckTermsAndConditionsPageContents().should('contain', "This is the terms and conditions document. We are not yet ready with it. Stay tuned!");
    cy.CheckTermsAndConditionsPageContents().should('not.contain', "This is the privacy document. We are not yet ready with it. Stay tuned!");
  })

  it.skip('Check Privacy Link!', function() {
    
    cy.OpenPrivacyPage();
    // Assertions
    cy.url().should('include', '/privacy');
    cy.CheckPrivacyPageContents().should('contain', "This is the privacy document. We are not yet ready with it. Stay tuned!");
    cy.CheckPrivacyPageContents().should('not.contain', "This is the terms and conditions document. We are not yet ready with it. Stay tuned!");
  })

  it.skip('Check qxf2 Connection!', function() {
    
    cy.OpenQxF2Page();
    //Assertions
    cy.GetQxF2PageTitle().should('contain',"QA for startups");
  })

  it.skip('Check First and Last Year and the bottom of the page!', function() {
    
    cy.get('.wor_copyright').should('contain',"QA for startups");
    //© Qxf2 Services 2013 - 2022
  })
})
