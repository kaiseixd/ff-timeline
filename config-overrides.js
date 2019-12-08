const { override, addLessLoader, fixBabelImports, addWebpackAlias } = require("customize-cra");
const path = require('path');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  })，
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
);
