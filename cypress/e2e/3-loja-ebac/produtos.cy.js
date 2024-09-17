/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page"

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')
        //cy.get('.products > .row')
        //.First()
        //.last()
        //.eq(5) // Eq serve para listar algum produto que eu quiser, apontando com o número dele na tela, para ser clicável.
        //.contains('Ariel Roll Sleeve Sweatshirt') //Aqui, vai selecionar o que contém da página.
        //.click()
        cy.get('#tab-title-description > a').should('exist')
    });

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Apollo Running Short'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        
    });

    it('/deve adicionar o produto ao carrinho', () => {
        
    });
});