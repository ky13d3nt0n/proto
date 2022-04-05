/**
 * @module PostCSS Config
 * @description Our config for PostCSS
 */
const functions = require( './styles/utilities/functions/functions' );

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {
      url: ( asset ) => {
        if ( asset.url[ 0 ] === '/' && typeof process.env.BASE_PATH !== 'undefined' ) {
          return `${ process.env.BASE_PATH }/${ asset.url }`;
        }

        return asset.url;
      }
    },
    'postcss-functions': {
      functions
    },
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-custom-media': {},
    'postcss-color-mod-function': {
      preserveCustomProps: true,
      importFrom: './styles/utilities/variables/colors.css'
    }
  }
};
