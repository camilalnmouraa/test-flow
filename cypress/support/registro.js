import { Helpers }  from '../utils/helpers';
import { faker } from '@faker-js/faker/locale/en';

const helpers = new Helpers();

Cypress.Commands.add('registro', () => {
  const id_email = `${faker.internet.email()}`;
  const id_senha = Cypress.env('senha');
  const id_nome = `${faker.person.fullName()}`;
    
  cy.visit('/');
  helpers.clicarDropdown('.dropdown-menu','Cadastre-se');
  helpers.preencherCampo('id_email.span8', id_email);
  helpers.clicarBotao('Cadastrar');
  helpers.validarTextoVisivel('h1', 'Identificação');
  helpers.validarCampoValor('id_email', id_email);
  helpers.preencherCampo('id_confirmacao_email', id_email);
  helpers.preencherCampo('id_senha', id_senha);
  helpers.preencherCampo('id_confirmacao_senha', id_senha);
  helpers.verificarEMarcarCheckbox('id_tipo_0');
  helpers.preencherCampo('id_nome', id_nome);
  helpers.preencherCampo('id_cep','52071-335');
  helpers.preencherCampo('id_cpf','08972629480');
  helpers.preencherCampo('id_telefone_celular','(81) 99999-9999');
  helpers.preencherCampo('id_telefone_principal', '(81) 3442-5804');
  helpers.selecionarOpcao('id_sexo', 'Feminino');
  helpers.preencherCampo('id_data_nascimento', '01/01/1990');
  helpers.preencherCampo('id_numero', '123');
  helpers.preencherCampo('id_complemento', 'casa');
  helpers.preencherCampo('id_referencia', 'perto da padaria');
  helpers.clicarBotao('Criar Conta');
  helpers.validarTextoVisivel('.alert.alert-success.alert-geral', 'Cliente criado com sucesso');
});