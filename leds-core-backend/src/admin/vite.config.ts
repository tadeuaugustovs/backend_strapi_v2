// ./src/admin/vite.config.ts
import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    // Adicionando a configuração do servidor conforme as instruções
    server: {
      host: '0.0.0.0', // Mantém o servidor acessível na rede
      allowedHosts: [
        'strapi.conectafapes.leds.dev.br', 

      ],
    },
  });
};