/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos') //Lembrando: O visit está encurtado, por conta de ter colocado o link lá em "cypress.config.js"
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.First()
        //.last()
        //.eq(5) // Eq serve para listar algum produto que eu quiser, apontando com o número dele na tela, para ser clicável.
        .contains('Ariel Roll Sleeve Sweatshirt') //Aqui, vai selecionar o que contém da página.
        .click()
        cy.get('#tab-title-description > a').should('exist')
    });
});