const path = require('path');
const { generateTheme, getLessVars } = require('antd-theme-generator');

const options = {
  stylesDir: path.join(__dirname, './public/src/styles'),
  antDir: path.join(__dirname, './node_modules/antd'),
  varFile: path.join(__dirname, './public/styles/vars.less'),
  mainLessFile: path.join(__dirname, './public/styles/main.less'),
  themeVariables: [
    '@primary-color',
    '@secondary-color',
    '@text-color',
    '@text-color-secondary',
    '@heading-color',
    '@layout-body-background',
    '@btn-primary-bg',
    '@layout-header-background'
  ],
  // indexFileName: 'index.html',
  // outputFilePath: path.join(__dirname, './src/static/color.less'),
  outputFilePath: path.join(__dirname, './public/static/color.less'),
}

generateTheme(options).then(less => {
  console.log('Theme generated successfully');
})
  .catch(error => {
    console.log('Error', error);
  });
