export class Helpers {
  clicarDropdown(seletorContainer, opcaoTexto) {
    cy.get(seletorContainer, { timeout: 3000 })
      .contains('a', opcaoTexto, { timeout: 3000 })
      .click({ force: true }); 
  }

  clicarPorTitulo(titulo) {
    cy.get(`a[title="${titulo}"]`, { timeout: 3000 })
      .eq(1)
      .click({ force: true });
  }  

  preencherCampo(campoId, valor) {
    const normalizarValor = (val) => val.replace(/[\s-.]/g, '').toLowerCase();
    
    cy.get(`#${campoId}`)
      .should('be.visible')
      .clear()
      .type(valor.toLowerCase())
      .should(($input) => {
        const valorCampo = $input.val();//obtém o valor do campo diretamente do elemento jQuery
        expect(normalizarValor(valorCampo)).to.equal(normalizarValor(valor));
      });
  }    

  clicarBotao(botaoText) {
    cy.contains('button, input[type="submit"], a, div', botaoText, { timeout: 5000 })
      .should('be.visible')
      .click({ force: true });
  }   

  validarTextoVisivel(seletorElemento, texto) {
    cy.get(seletorElemento, { timeout: 3000 })
      .should('be.visible')
      .and('contain.text', texto);//verifica se o texto fornecido está presente no elemento
  }    

  validarCampoValor(campoId, valorEsperado) {
    cy.get(`#${campoId}`, { timeout: 3000 })
      .should('be.visible')
      .invoke('val')//obtém o valor do campo
      .then((valorCampo) => {
        expect(valorCampo.toLowerCase()).to.equal(valorEsperado.toLowerCase());
      });
  }

  verificarEMarcarCheckbox(checkboxId) {
    cy.get(`#${checkboxId}`, { timeout: 5000 })
      .should('be.visible')//garante que o checkbox está visível
      .then(($checkbox) => {
        if (!$checkbox.is(':checked')) {//verifica se não está marcado
          cy.wrap($checkbox).click();//marca o checkbox se não estiver marcado
        }
      });
  }

  selecionarOpcao(selectId, opcaoTexto) {
    cy.get(`#${selectId}`, { timeout: 3000 })
      .should('be.visible')
      .select(opcaoTexto);
  }

  clicarElementoPorClasse(classeElemento, quantidade = 1) {
    cy.get(`.${classeElemento}`, { timeout: 3000 })
      .should('be.visible')
      .then(($elemento) => {
        Cypress._.times(quantidade, () => {
          cy.wrap($elemento).click();
        });
      });
  }
  
  validarCalculoDesconto(percentualDesconto) {
    //seleciona o subtotal, o desconto e o total
    cy.get('.valor-subtotal').invoke('text')
      .then(subtotalText => parseFloat(subtotalText.replace('R$', '').replace('.', '').replace(',', '.').trim()))
      .then(subtotal => {
        const descontoEsperado = parseFloat((subtotal * (percentualDesconto / 100)).toFixed(2));
  
        cy.get('#cupom_valor_real').invoke('text')
          .then(descontoText => parseFloat(descontoText.replace('R$', '').replace('.', '').replace(',', '.').trim()))
          .should('equal', descontoEsperado);
  
        cy.get('.valor-total').invoke('text')
          .then(totalText => parseFloat(totalText.replace('R$', '').replace('.', '').replace(',', '.').trim()))
          .should('equal', parseFloat((subtotal - descontoEsperado).toFixed(2)));
      });
  }

  validarFreteGratis() {
    // Verifica se o texto "Frete grátis" está presente
    cy.get('.desconto #cupomResultado strong').should('contain.text', 'Frete grátis');
  
    // Obtém o valor do subtotal
    cy.get('.subtotal').invoke('text').then(subtotalText => {
      const subtotal = parseFloat(subtotalText.replace('R$', '').replace('.', '').replace(',', '.').trim());
  
      // Obtém o valor total
      cy.get('.total').invoke('text').then(totalText => {
        const total = parseFloat(totalText.replace('R$', '').replace('.', '').replace(',', '.').trim());
  
        // Valida se subtotal e total são iguais
        expect(subtotal).to.equal(total);
      });
    });
  }

  marcarRadio(name, value) {
    cy.get(`input[type="radio"][name="${name}"][value="${value}"]`, { timeout: 3000 })
      .should('be.visible')
      .and('not.be.checked')
      .check({ force: true });
  }
}