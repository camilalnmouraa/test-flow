/// <reference types="cypress" />

import { Helpers } from '../utils/helpers';

const helpers = new Helpers();

describe('Carrinho de Compras - Cupons de Desconto', () => {

  beforeEach(() => {
    cy.registro();
  });

  it('Aplicar o cupom de desconto 10OFF e verificar o desconto aplicado', () => {
    helpers.clicarDropdown('.nivel-dois', 'CODIGO');
    helpers.clicarBotao('[CODIGO] Produto com MPN preenchido');
    helpers.clicarElementoPorClasse('plus', 3);
    helpers.clicarBotao('Comprar');
    helpers.preencherCampo('usarCupom', '10OFF');
    helpers.clicarBotao('Usar cupom');
    helpers.validarTextoVisivel('.muted', 'Alguns cupons não são cumulativos com promoções.');
    helpers.validarCalculoDesconto(10);
    helpers.clicarBotao('Finalizar compra');
  });

  it('Aplicar o cupom de desconto FRETEGRATIS e verificar o desconto aplicado', () => {
    helpers.clicarDropdown('.nivel-dois', 'MARCA');
    helpers.clicarPorTitulo('Adicionar produto ao carrinho');
    helpers.preencherCampo('usarCupom', 'FRETEGRATIS');
    helpers.clicarBotao('Usar cupom');
    helpers.clicarBotao('Finalizar compra');
    helpers.validarFreteGratis();
  });
});