import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  externals: {
    // config: 'window.CONFIG',
    // Map3D: 'Map3D'
  },
  treeShaking: true,
  publicPath: '/',
  history: 'hash',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'umiProject',
      dll: false,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ],
      },
    }],
  ],
}

export default config;
