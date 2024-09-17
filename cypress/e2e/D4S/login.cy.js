/// <reference types="cypress"/>


describe('Login em Secure', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('https://stage.d4sign.com.br/')
        cy.get('#Passwd').click()
    });
});