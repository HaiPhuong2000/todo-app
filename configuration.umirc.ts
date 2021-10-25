import { defineConfig } from 'dumi';
export default defineConfig({
  ssr: {
    devServerRender: false,
  },
  exportStatic: {},
  hash: true,
  mode: 'site',
  logo: '/logo.jpg',
  favicon: '/logo.jpg',
  navs: [null, { title: 'GitHub', path: 'https://github.com/whistleyz' }],
});
