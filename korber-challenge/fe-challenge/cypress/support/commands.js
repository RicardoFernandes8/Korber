// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import exercisesPage from "./ExercisesPage";

Cypress.Commands.add('CalculateFactorial', function(value) {

        factorial = 1
        if(value != 0 || value != 1) {
            for(let i=value; i>=1; i--) {
                factorial = factorial * i;
            }
        }
        
        for(let j=0; j<100; j++)
            console.log(factorial);
        
        return factorial;
})
