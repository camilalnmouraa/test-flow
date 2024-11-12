import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {
      _on('after:spec', async (spec, results) => {
        if (results && results.video) {
          // Se todos os testes passaram, apaga o vídeo
          if (results.stats.failures === 0) {
            const fs = await import('fs');
            return new Promise((resolve, reject) => {
              fs.unlink(results.video, (err) => {
                if (err) return reject(err);
                resolve();
              });
            });
          }
        }
      });
    },
    baseUrl: 'https://qastoredesafio.lojaintegrada.com.br/',
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 1,
    },
    video: true,
  },
});

