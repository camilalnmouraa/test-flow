# Carrinho de Compras com Cupons de Desconto

Projeto de automação para a funcionalidade de [`aplicação de cupons de desconto`](./index.js) no carrinho de compras, que:

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
> javascript

  aplicaçãoDeCupons
    ✔ deve retornar o valor correto com o cupom de 30 reais aplicado
    ✔ deve retornar o valor correto com o cupom de 10% de desconto aplicado
    ✔ deve retornar o valor correto com o cupom de frete grátis aplicado

  3 passing (7ms)
```

## Cenário Automatizado Inicial

O primeiro cenário de teste automatizado, do tipo "outline", inclui a validação de cupons válidos existentes na base de dados. Os cupons testados serão:
- 30REAIS: Aplica um desconto fixo de R$30,00
- 10OFF: Aplica um desconto de 10% sobre o valor total da compra
- FRETEGRATIS: Elimina o custo do frete na compra

___

This project was created with 🤍 and ☕ by Camila Moura. by [Camila Moura](https://linkedin.com/in/camilalnmoura).
