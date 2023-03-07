import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import { presetAttributify, presetUno } from 'unocss';
// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    presets: [presetAttributify(), presetUno()],
    injectReset: false,
  })]
});
