# Carrinho de Compras com Cupons de Desconto

Projeto de automação para a funcionalidade de [`aplicação de cupons de desconto`](cypress/e2e/cupom-desconto.cy.js) no carrinho de compras, que:

- Aceita um cupom válido de desconto como entrada.
- Calcula o valor total da compra aplicando o desconto correspondente.
- Retorna o valor atualizado da compra e valida o cálculo para diferentes tipos de cupons.

> **Note:** A funcionalidade de cupons de desconto permite aplicar benefícios aos clientes durante o processo de compra, especialmente em datas comerciais de grande volume, como a Black Friday.

## Pré-requisitos

É necessário ter o Node.js e o npm instalados para executar este projeto.

> Neste projeto foram utilizadas as versões `v20.14.0` para o Node.js e `10.7.0` para o npm. Recomenda-se o uso das mesmas ou versões mais recentes.

## Instalação

Execute `npm install` to install the dev dependencies.

## Testes

Execute  `npm test` para rodar os testes automatizados.

> Após rodar os testes, o resultado esperado deve ser semelhante a este:

```sh

  Carrinho de Compras - Cupons de Desconto

    √ Aplicar o cupom de desconto 10OFF e verificar o desconto aplicado (18584ms)
    √ Aplicar o cupom de desconto FRETEGRATIS e verificar o desconto aplicado (14675ms)
    √ Aplicar o cupom inválido 20LIMITADO e verificar a mensagem de erro (11185ms)
    √ Aplicar o cupom inválido FAIELD e verificar a mensagem de erro (12390ms)
    √ Aplicar o cupom inválido CUPOMVENCIDO e verificar a mensagem de erro (13059ms)


  5 passing (1m)

```

## Relatório de Testes Automatizados


![Allure Report](cypress/fixtures/allure.png)



## Pipeline de Testes Automatizados



![Pipeline](cypress/fixtures/githubactions.png)

___

This project was created with 🤍 and ☕ by Camila Moura. by [Camila Moura](https://linkedin.com/in/camilalnmoura).
