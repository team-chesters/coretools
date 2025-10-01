import { VERSION } from './coretools.const';

import convert from './src/convert';
import number from './src/number';
import object from './src/object';
import array from './src/array';

import coretools from './coretools.wrapper';


coretools.isArray = array.isArray;
coretools.isEmpty = object.isEmpty;
coretools.isObject = object.isObject;
coretools.isNumber = number.isNumber;
coretools.isNegative = number.isNegative;
coretools.Dex2Hex = convert.Dex2Hex;
coretools.Hsl2Hex = convert.Hsl2Hex;

/**
 * The semantic version number.
 *
 * @static
 * @memberOf _
 * @type {string}
 */
coretools.version = VERSION;

export default coretools;