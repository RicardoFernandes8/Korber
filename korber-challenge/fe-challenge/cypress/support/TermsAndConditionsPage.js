export default {

    TermsAndConditionsNote: 'body'
}

Cypress.Commands.add('CheckTermsAndConditionsPageContents', function() {

    return cy.get("body");
})