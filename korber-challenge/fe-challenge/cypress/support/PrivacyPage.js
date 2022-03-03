export default {

    PrivacyNote: 'body'
}

Cypress.Commands.add('CheckPrivacyPageContents', function() {

    return cy.get("body");
})
