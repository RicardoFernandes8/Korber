export default {

    ExercisesPageTitle: '.banner-brown'
}

Cypress.Commands.add('GetQxF2PageTitle', function() {

    return cy.get(exercisesPage.ExercisesPageTitle);
})