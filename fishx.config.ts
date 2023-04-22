import {
  IESupportPlugin,
  DvaPlugin,
  LocalePlugin,
} from '@fishx/plugins';

const config = {
  title: 'fishx',
  plugins: [
    new IESupportPlugin(),
    new DvaPlugin(),
    new LocalePlugin(),
  ],
  router: {
    history: 'hash',
  },
  proxy: {
    '/api': {
      target: 'http://r9portal-dubbo-demo-client.uportal.svc.tb.zsmart.com:8020',
      changeOrigin: true,
    },
  },
  analyze: {
    analyzerPort: 7788,
  },
};

export default config;
