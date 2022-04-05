/* eslint-disable @typescript-eslint/no-explicit-any */

/** What's this?
 *
 * TS gets upset with web components as it can't see these elements
 * in HTML and thinks we're making stuff up. Listing web components
 * here stops the complier from being quite so *dramatic*.
 */

declare namespace JSX {
  interface IntrinsicElements {
    'scheme-toggle': any;
  }
}
