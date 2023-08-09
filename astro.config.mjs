import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://mprojectscode.github.io/',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp',
  })]
});