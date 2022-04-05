/**
 * @module functions
 * @description PostCSS JS Functions
 */

/**
 * @function cleanString
 * @description Clean our input
 */
const cleanString = ( value ) => value.replace( /px|em|%|rem/, '' );

/**
 * @function rem
 * @description Convert px to rem
 */
const rem = ( fontSize ) => `${ ( cleanString( fontSize ) / 16 ) }rem`;

/**
 * @function lh
 * @description Convert lh to decimal
 */
const lh = ( fontSize, lineHeight ) => ( cleanString( lineHeight ) / cleanString( fontSize ) ).toFixed( 2 );

module.exports = {
  rem,
  lh
};
