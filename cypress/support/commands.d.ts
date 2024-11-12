/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
    /**
       * Registra um novo usuário automaticamente na aplicação.
       *
       * O comando `registro` cria um usuário usando informações geradas pelo faker, 
       * preenche o formulário de cadastro e envia os dados.
       *
       * @example cy.registro() // Registra um novo usuário com dados aleatórios
       */
    registro(): Chainable<void>;
    }
}  