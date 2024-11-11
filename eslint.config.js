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
      'cypress/no-unnecessary-waiting': 'error', // Evita o uso desnecessário de cy.wait()
      'cypress/assertion-before-screenshot': 'error', // Garante asserções antes de screenshots
      'cypress/no-pause': 'error', // Impede o uso de cy.pause()
      'cypress/no-assigning-return-values': 'error', // Evita atribuir retornos do Cypress a variáveis
      'cypress/no-async-tests': 'error', // Impede o uso de funções assíncronas nos testes
      'cypress/no-force': 'error', // Evita o uso da opção { force: true } nos comandos do Cypress

      // Regras gerais de boas práticas
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'consistent-return': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-magic-numbers': ['warn', { ignore: [0, 1] }],
      'prefer-const': 'error',
      eqeqeq: 'error',
    },
  },
];