import cypressPlugin from 'eslint-plugin-cypress';

export default [
  {
    ignores: ['node_modules/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: 'readonly',
        commonjs: 'readonly',
        es2021: 'readonly',
        node: 'readonly',
      },
    },
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      'cypress/no-unnecessary-waiting': 'error', //evita o uso desnecessário de cy.wait()
      'cypress/assertion-before-screenshot': 'error', //garante asserções antes de screenshots
      'cypress/no-pause': 'error', //impede o uso de cy.pause()
      'cypress/no-assigning-return-values': 'error', //evita atribuir retornos do Cypress a variáveis
      'cypress/no-async-tests': 'error', //impede o uso de funções assíncronas nos testes

      // Regras gerais de boas práticas
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'prefer-const': 'error',
      eqeqeq: 'error',
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
];