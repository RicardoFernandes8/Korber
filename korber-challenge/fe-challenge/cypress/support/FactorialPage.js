export default {

    PageHeader: '.margin-base-vertical', 
    NumberTextBox: '#number', 
    ButtonCalculateFactorial: '#getFactorial', 
    FactorialResult: '#resultDiv', 
    TermsAndConditionLink: 'a[href="/terms"]', 
    PrivacyLink: 'a[href="/privacy"]', 
    ExercisesPageLink: 'a[href="https://www.qxf2.com/?utm_source=qa-interview&utm_medium=click&utm_campaign=From%20QA%20Interview"]', 
    CopyrightText: '.wor_copyright',
};

Cypress.Commands.add('PressCalculateButton', function() {

    cy.get("#getFactorial").click();
})

Cypress.Commands.add('TypeNumber', function(value) {

    if(value != "")
        cy.get("#number").type(value);
    else
        cy.get("#number").clear();
})

Cypress.Commands.add('ClearTextField', function() {
    
    cy.get("#number").clear();
})

Cypress.Commands.add('GetResultString', function() {

    return cy.get("#resultDiv");
})

Cypress.Commands.add('GetResultStringColor', function() {

    return cy.get("#resultDiv");
})

Cypress.Commands.add('GetTextFieldBorderColor', function() {

    return cy.get("#number");
})

Cypress.Commands.add('OpenPrivacyPage', function() {

    cy.intercept('GET','http://qainterview.pythonanywhere.com/privacy').as('Privacy')
    cy.get('a[href="/privacy"]').click();
    cy.wait('@Privacy');
})

Cypress.Commands.add('OpenTermsAndConditionsPage', function() {

    cy.intercept('GET','http://qainterview.pythonanywhere.com/terms').as('TermsAndConditions')
    cy.get('a[href="/terms"]').click();
    cy.wait('@TermsAndConditions');
})

Cypress.Commands.add('OpenQxF2Page', function() {

    cy.intercept('GET', 'https://www.qxf2.com/?utm_source=qa-interview&utm_medium=click&utm_campaign=From%20QA%20Interview').as('QxF2_Services')
    cy.get('a[href="https://www.qxf2.com/?utm_source=qa-interview&utm_medium=click&utm_campaign=From%20QA%20Interview"]').click();
    cy.wait('@QxF2_Services');
})
