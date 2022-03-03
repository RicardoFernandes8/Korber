
import FactorialPage from "../../support/FactorialPage.js";

describe('Factorial Calculation Tests', function() {
    
    beforeEach(function() {
        
        cy.visit("http://qainterview.pythonanywhere.com/");
    })

    it('Empty value - ', function() {
        
        cy.TypeNumber("");
        cy.PressCalculateButton();

        //Assertions
        cy.GetTextFieldBorderColor().should('have.css', 'border', '2px solid rgb(255, 0, 0)');
        cy.GetResultString().should('contain', "Please enter an integer");
        cy.GetResultStringColor().should('have.css', 'color', 'rgb(255, 0, 0)');
    })
    
    it('Negative value - -1', function() {
        
        cy.TypeNumber("-1");
        cy.PressCalculateButton();

        //Assertions
        cy.GetTextFieldBorderColor().should('have.css', 'border', '2px solid rgb(255, 0, 0)');
        cy.GetResultString().should('contain', "Please enter an integer");
        cy.GetResultStringColor().should('have.css', 'color', 'rgb(255, 0, 0)');
    })

    it('Lowest valid value - 0', function() {
        
        cy.TypeNumber("0");
        cy.PressCalculateButton();
        
        //Assertions
        cy.GetResultString().should('contain', "The factorial of 0 is: 1");
        cy.GetResultStringColor().should('have.css', 'color', 'rgb(0, 0, 0)');
    })
    
    it('Lowest valid value - 1', function() {
        
        cy.TypeNumber("1");
        cy.PressCalculateButton();
        
        //Assertions
        cy.GetResultString().should('contain', "The factorial of 1 is: 1");
        cy.GetResultStringColor().should('have.css', 'color', 'rgb(0, 0, 0)');
    })

    it('Valid value - 5', function() {
        
        cy.TypeNumber("5");
        cy.PressCalculateButton();
        
        //Assertions
        cy.GetResultString().should('contain', "The factorial of 5 is: 120");
        cy.GetResultStringColor().should('have.css', 'color', 'rgb(0, 0, 0)');
    })

    it('Invalid value - a', function() {
        
        cy.TypeNumber("a");
        cy.PressCalculateButton();
        
        //Assertions
        cy.GetTextFieldBorderColor().should('have.css', 'border', '2px solid rgb(255, 0, 0)');
        cy.GetResultString().should('contain', "Please enter an integer");
        cy.GetResultStringColor().should('have.css', 'color', 'rgb(255, 0, 0)');
    })

    it('Numbers and letters - 3F', function() {
        
        cy.TypeNumber("3F");
        cy.PressCalculateButton();

        //Assertions
        cy.GetTextFieldBorderColor().should('have.css', 'border', '2px solid rgb(255, 0, 0)');
        cy.GetResultString().should('contain', "Please enter an integer");
        cy.GetResultStringColor().should('have.css', 'color', 'rgb(255, 0, 0)');
    })

    it('Invalid real number value - 2.0', function() {
        
        cy.TypeNumber("2.0");
        cy.PressCalculateButton();
        
        //Assertions
        cy.GetTextFieldBorderColor().should('have.css', 'border', '2px solid rgb(255, 0, 0)');
        cy.GetResultString().should('contain', "Please enter an integer");
        cy.GetResultStringColor().should('have.css', 'color', 'rgb(255, 0, 0)');
    })

    it('ASCII character - #', function() {
        
        cy.TypeNumber("#");
        cy.PressCalculateButton();

        //Assertions
        cy.GetTextFieldBorderColor().should('have.css', 'border', '2px solid rgb(255, 0, 0)');
        cy.GetResultString().should('contain', "Please enter an integer");
        cy.GetResultStringColor().should('have.css', 'color', 'rgb(255, 0, 0)');
    })

    it('Most significant digit set to 0 - 03', function() {
        
        cy.TypeNumber("03");
        cy.PressCalculateButton();
        
        //Assertions
        cy.GetTextFieldBorderColor().should('have.css', 'border', '2px solid rgb(255, 0, 0)');
        cy.GetResultString().should('contain', "Please enter an integer");
        cy.GetResultStringColor().should('have.css', 'color', 'rgb(255, 0, 0)');
    })

    it('Big value yet not Outside of range - 200', function() {
        
        cy.TypeNumber("200");
        cy.PressCalculateButton();

        //Assertions
        cy.GetResultString().should('contain', "The factorial of 200 is: Infinity");
        cy.GetResultStringColor().should('have.css', 'color', 'rgb(0, 0, 0)');
    })

    it('Big value not Outside of range - 989', function() {
        
        cy.TypeNumber("989");
        cy.PressCalculateButton();

        //Assertions
        cy.GetResultString().should('contain', "The factorial of 989 is: Infinity");
        cy.GetResultStringColor().should('have.css', 'color', 'rgb(0, 0, 0)');
    })

    it('Big value not Outside of range - 990', function() {
        
        cy.TypeNumber("990");
        cy.PressCalculateButton();

        //Assertions
        cy.GetResultString().should('contain', "The factorial of 990 is: Infinity");
        cy.GetResultStringColor().should('have.css', 'color', 'rgb(0, 0, 0)');
    })

    // Falha para o valor 990 deixa de ser acutalizada a mensagem apresentada ao utilizador fica a mensagem de 989
    it('Big value not Outside of range - 989, 990', function() {
        
        cy.TypeNumber("989");
        cy.PressCalculateButton();
        cy.GetResultString().should('contain', "The factorial of 989 is: Infinity");
        cy.GetResultStringColor().should('have.css', 'color', 'rgb(0, 0, 0)');

        cy.ClearTextField();

        cy.TypeNumber("990");
        cy.PressCalculateButton();
        cy.GetResultString().should('contain', "The factorial of 990 is: Infinity");
        cy.GetResultStringColor().should('have.css', 'color', 'rgb(0, 0, 0)');
    })
})
