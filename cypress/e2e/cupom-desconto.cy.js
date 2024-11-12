/// <reference types="cypress" />

import { Helpers } from '../utils/helpers';

const helpers = new Helpers();

describe('Carrinho de Compras - Cupons de Desconto', () => {

  beforeEach(() => {
    cy.registro();
  });

  //ajustar validação do calculo para a última tela + clicar no radio button do frete
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
  // Cenário outline para testar cupons inválidos
  const cuponsInvalidos = [
    { cupom: '20LIMITADO', mensagem: 'Cupom não encontrado.' },
    { cupom: 'FAIELD', mensagem: 'Cupom não encontrado.' },
    { cupom: 'CUPOMVENCIDO', mensagem: 'O cupom não é válido.' }
  ];

  cuponsInvalidos.forEach(({ cupom, mensagem }) => {
    it(`Aplicar o cupom inválido ${cupom} e verificar a mensagem de erro`, () => {
      helpers.clicarDropdown('.nivel-dois', 'MARCA');
      helpers.clicarPorTitulo('Adicionar produto ao carrinho');
      helpers.preencherCampo('usarCupom', cupom);
      helpers.clicarBotao('Usar cupom');
      helpers.validarTextoVisivel('.alert.alert-danger.alert-geral', mensagem);
    });
  });
});