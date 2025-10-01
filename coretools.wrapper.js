import baseCoretools from './src/_base/baseCoretools.js';
import isArray from './src/array/isArray.js';
import isObject from './src/object/isObject.js';

function coretools(value) {
  if (isObject(value) && !isArray(value)) {
    if (value instanceof CoretoolsWrapper) {
      return value;
    }
  }
  return new CoretoolsWrapper(value);
}

// Ensure wrappers are instances of `baseCoretools`.
coretools.prototype = baseCoretools.prototype;
coretools.prototype.constructor = coretools;

export default coretools;
