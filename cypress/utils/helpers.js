export class Helpers {
    clicarDropdown(seletorContainer, opcaoTexto) {
        cy.get(seletorContainer, { timeout: 5000 })
        .contains('a', opcaoTexto, { timeout: 10000 })
        .click({ force: true }); 
    }
    

    preencherCampo(campoId, valor) {
        const normalizarValor = (val) => val.replace(/[\s-.]/g, '').toLowerCase();
    
        cy.get(`#${campoId}`)
            .scrollIntoView()
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
        .scrollIntoView()
        .should('be.visible')
        .click({ force: true });
    }   

    validarTextoVisivel(seletorElemento, texto) {
        cy.get(seletorElemento, { timeout: 5000 })
            .should('be.visible')
            .and('contain.text', texto);//verifica se o texto fornecido está presente no elemento
    }    

    validarCampoValor(campoId, valorEsperado) {
        cy.get(`#${campoId}`, { timeout: 5000 })//seleciona o campo pelo ID
        .should('be.visible')//garante que o campo está visível
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
        cy.get(`#${selectId}`, { timeout: 5000 }) // Seleciona o campo <select> pelo ID
            .should('be.visible') // Garante que o <select> está visível
            .select(opcaoTexto); // Seleciona a opção pelo texto
    }

    clicarElementoPorClasse(classeElemento, quantidade = 1) {
        cy.get(`.${classeElemento}`, { timeout: 5000 })
            .should('be.visible')
            .then(($elemento) => {
                for (let i = 0; i < quantidade; i++) {
                    cy.wrap($elemento).click({ force: true });
                }
            });
    }       
}