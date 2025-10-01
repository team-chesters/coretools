import baseCoretools from './src/_base/baseCoretools.js';
import isArray from './src/array/isArray.js';
import isObject from './src/object/isObject.js';

class CoretoolsWrapper {
  constructor(value) {
    this.__wrapped__ = value;
    this.__actions__ = [];
  }

  value() {
    return this.__wrapped__;
  }
}

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
