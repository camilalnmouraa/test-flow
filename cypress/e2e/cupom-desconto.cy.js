/// <reference types="cypress" />

import { Helpers } from "../utils/helpers";

const helpers = new Helpers();

describe('Carrinho de Compras - Cupons de Desconto', () => {
  const cupons = ['10OFF', '30REAIS', 'FRETEGRATIS'];

  beforeEach(() => {
    cy.registro();
  });

  Cypress._.each(cupons, (cupom) => {
    it(`Aplicar o cupom de desconto "${cupom}" e verificar o desconto aplicado`, () => {
      helpers.clicarElementoPorClasse('nome-produto', '[CODIGO] Produto com NCM preenchido');
      helpers.clicarElementoPorClasse('plus', 3);
      helpers.clicarElementoPorClasse('botao botao-comprar principal grande', 1);
      helpers.preencherCampo('usarCupom', cupom);
      helpers.clicarBotao('Usar cupom');
      helpers.validarTextoVisivel('.muted', 'Alguns cupons não são cumulativos com promoções.');
      
    });
  });
});