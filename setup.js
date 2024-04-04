require('@babel/register');
require('ts-node').register({ transpileOnly: false; false });

require('./helpers/setup-helper');

window.SVGPathElement = window.SVGPathElement || { prototype: {} };
global.indexedDB = {};
