Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('leon', {delay: 0})
    cy.get('#lastName').type('carvalho', {delay: 0})
    cy.get('#email').type('leon@cypress.com', {delay: 0})
    cy.get('#open-text-area').type('test, teste, teste,test, teste, teste,test, teste, teste,test, teste, teste,test, teste, teste,test, teste, teste,test, teste, teste', {delay: 0})
    cy.contains('button', 'Enviar').click()
    

})
